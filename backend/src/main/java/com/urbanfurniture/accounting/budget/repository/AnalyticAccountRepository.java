package com.urbanfurniture.accounting.budget.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.budget.model.AnalyticAccount;

public interface AnalyticAccountRepository extends MongoRepository<AnalyticAccount, String> {

    Optional<AnalyticAccount> findByCode(String code);

    boolean existsByCode(String code);
}