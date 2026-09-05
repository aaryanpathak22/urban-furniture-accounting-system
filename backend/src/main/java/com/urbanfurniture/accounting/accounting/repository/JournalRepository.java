package com.urbanfurniture.accounting.accounting.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.accounting.model.Journal;

public interface JournalRepository extends MongoRepository<Journal, String> {

}