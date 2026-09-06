package com.urbanfurniture.accounting.ledger;

import java.util.List;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class LedgerService {


    private final MongoTemplate mongoTemplate;


    public List<?> getLedgerEntries() {

        return mongoTemplate.findAll(
            Object.class,
            "ledger_entries"
        );

    }
}