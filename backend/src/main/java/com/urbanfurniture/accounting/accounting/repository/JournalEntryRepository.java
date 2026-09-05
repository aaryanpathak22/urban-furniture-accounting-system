package com.urbanfurniture.accounting.accounting.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.accounting.model.JournalEntry;

public interface JournalEntryRepository extends MongoRepository<JournalEntry, String> {

    Optional<JournalEntry> findByEntryNumber(String entryNumber);

    boolean existsByEntryNumber(String entryNumber);

    List<JournalEntry> findByJournalId(String journalId);
}