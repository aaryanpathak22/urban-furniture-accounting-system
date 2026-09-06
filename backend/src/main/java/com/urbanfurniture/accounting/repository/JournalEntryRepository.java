package com.urbanfurniture.accounting.repository;
import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.model.JournalEntry;
public interface JournalEntryRepository extends MongoRepository<JournalEntry, String> {

    List<JournalEntry> findByJournalId(String journalId);

}