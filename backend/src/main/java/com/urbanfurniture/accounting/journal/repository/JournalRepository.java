package com.urbanfurniture.accounting.journal.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.journal.model.Journal;

public interface JournalRepository 
        extends MongoRepository<Journal, String> {

}