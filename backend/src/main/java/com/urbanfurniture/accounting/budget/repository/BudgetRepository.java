package com.urbanfurniture.accounting.budget.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.budget.model.Budget;

public interface BudgetRepository extends MongoRepository<Budget, String> {

    Optional<Budget> findByNameAndFiscalYear(String name, int fiscalYear);

    List<Budget> findByFiscalYear(int fiscalYear);

    boolean existsByNameAndFiscalYear(String name, int fiscalYear);
}