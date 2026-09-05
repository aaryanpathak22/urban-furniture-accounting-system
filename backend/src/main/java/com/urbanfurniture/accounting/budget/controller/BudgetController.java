package com.urbanfurniture.accounting.budget.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.budget.model.Budget;
import com.urbanfurniture.accounting.budget.service.BudgetService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/budgets")
@RequiredArgsConstructor
public class BudgetController {

    private final BudgetService budgetService;


    @PostMapping
    public ResponseEntity<Budget> create(
            @RequestBody Budget budget) {

        return ResponseEntity.ok(
                budgetService.createBudget(budget)
        );
    }


    @GetMapping
    public ResponseEntity<List<Budget>> getAll() {

        return ResponseEntity.ok(
                budgetService.getAllBudgets()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Budget> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                budgetService.getBudgetById(id)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<Budget> update(
            @PathVariable String id,
            @RequestBody Budget budget) {

        return ResponseEntity.ok(
                budgetService.updateBudget(id, budget)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        budgetService.deleteBudget(id);

        return ResponseEntity.noContent().build();
    }
}