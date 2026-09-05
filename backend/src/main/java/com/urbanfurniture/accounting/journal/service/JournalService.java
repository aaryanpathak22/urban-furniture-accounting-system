package com.urbanfurniture.accounting.journal.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.journal.model.Journal;
import com.urbanfurniture.accounting.journal.repository.JournalRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class JournalService {

    private final JournalRepository journalRepository;


    public Journal createJournal(Journal journal) {

        if (journal.getJournalDate() == null) {
            journal.setJournalDate(LocalDate.now());
        }

        double totalDebit = 0.0;
        double totalCredit = 0.0;


        if (journal.getLines() != null) {

            for (Journal.JournalLine line : journal.getLines()) {

                totalDebit += line.getDebit();
                totalCredit += line.getCredit();
            }
        }


        if (totalDebit != totalCredit) {
            throw new RuntimeException(
                    "Journal is not balanced. Debit must equal Credit"
            );
        }


        journal.setTotalDebit(totalDebit);
        journal.setTotalCredit(totalCredit);


        return journalRepository.save(journal);
    }


    public List<Journal> getAllJournals() {

        return journalRepository.findAll();
    }


    public Journal getJournalById(String id) {

        return journalRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Journal not found with id: " + id
                        )
                );
    }


    public void deleteJournal(String id) {

        journalRepository.deleteById(id);
    }
}