package com.urbanfurniture.accounting.accounting.service;

import com.urbanfurniture.accounting.accounting.dto.*;
import com.urbanfurniture.accounting.accounting.model.Journal;
import com.urbanfurniture.accounting.accounting.model.JournalEntry;
import com.urbanfurniture.accounting.accounting.repository.JournalEntryRepository;
import com.urbanfurniture.accounting.accounting.repository.JournalRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class JournalService {

    private final JournalRepository journalRepository;
    private final JournalEntryRepository journalEntryRepository;

    public JournalService(
            JournalRepository journalRepository,
            JournalEntryRepository journalEntryRepository) {

        this.journalRepository = journalRepository;
        this.journalEntryRepository = journalEntryRepository;
    }


    public JournalResponse createJournal(JournalRequest request) {

        double totalDebit = request.lines()
                .stream()
                .mapToDouble(JournalLineRequest::debit)
                .sum();

        double totalCredit = request.lines()
                .stream()
                .mapToDouble(JournalLineRequest::credit)
                .sum();


        if (totalDebit != totalCredit) {
            throw new RuntimeException(
                    "Journal is not balanced. Debit must equal Credit"
            );
        }


        Journal journal = Journal.builder()
                .reference(request.reference())
                .description(request.description())
                .createdAt(LocalDateTime.now())
                .build();


        Journal savedJournal = journalRepository.save(journal);


        List<JournalEntry> entries = request.lines()
                .stream()
                .map(line -> JournalEntry.builder()
                        .journalId(savedJournal.getId())
                        .accountId(line.accountId())
                        .debit(line.debit())
                        .credit(line.credit())
                        .build())
                .toList();


        journalEntryRepository.saveAll(entries);


        return new JournalResponse(
                savedJournal.getId(),
                savedJournal.getReference(),
                savedJournal.getDescription(),
                totalDebit,
                totalCredit,
                request.lines()
                        .stream()
                        .map(line ->
                                new JournalLineResponse(
                                        line.accountId(),
                                        line.debit(),
                                        line.credit()
                                )
                        )
                        .toList(),
                savedJournal.getCreatedAt()
        );
    }


    public List<JournalResponse> getAllJournals() {

        return journalRepository.findAll()
                .stream()
                .map(journal -> {

                    List<JournalEntry> entries =
                            journalEntryRepository
                                    .findByJournalId(journal.getId());

                    double debit = entries.stream()
                            .mapToDouble(JournalEntry::getDebit)
                            .sum();

                    double credit = entries.stream()
                            .mapToDouble(JournalEntry::getCredit)
                            .sum();


                    return new JournalResponse(
                            journal.getId(),
                            journal.getReference(),
                            journal.getDescription(),
                            debit,
                            credit,
                            entries.stream()
                                    .map(entry ->
                                            new JournalLineResponse(
                                                    entry.getAccountId(),
                                                    entry.getDebit(),
                                                    entry.getCredit()
                                            )
                                    )
                                    .toList(),
                            journal.getCreatedAt()
                    );

                })
                .toList();
    }
}