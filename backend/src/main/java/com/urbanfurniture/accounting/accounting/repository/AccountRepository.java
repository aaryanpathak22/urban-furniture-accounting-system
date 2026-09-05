package com.urbanfurniture.accounting.accounting.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.accounting.model.Account;

public interface AccountRepository extends MongoRepository<Account, String> {

    Optional<Account> findByCode(String code);

    boolean existsByCode(String code);
}