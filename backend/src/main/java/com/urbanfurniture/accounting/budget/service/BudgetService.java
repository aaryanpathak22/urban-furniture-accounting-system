package com.urbanfurniture.accounting.budget.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.budget.model.Budget;
import com.urbanfurniture.accounting.budget.repository.BudgetRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BudgetService {

    private final BudgetRepository budgetRepository;


    public Budget createBudget(Budget budget) {

        return budgetRepository.save(budget);
    }


    public List<Budget> getAllBudgets() {

        return budgetRepository.findAll();
    }


    public Budget getBudgetById(String id) {

        return budgetRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Budget not found")
                );
    }


    public Budget updateBudget(
            String id,
            Budget updatedBudget) {

        Budget existing = getBudgetById(id);

        existing.setName(updatedBudget.getName());
        existing.setFiscalYear(updatedBudget.getFiscalYear());
        existing.setStartDate(updatedBudget.getStartDate());
        existing.setEndDate(updatedBudget.getEndDate());
        existing.setLines(updatedBudget.getLines());

        return budgetRepository.save(existing);
    }


    public void deleteBudget(String id) {

        budgetRepository.deleteById(id);
    }
}