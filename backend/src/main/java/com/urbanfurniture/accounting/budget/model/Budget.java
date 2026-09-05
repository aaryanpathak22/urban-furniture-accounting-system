package com.urbanfurniture.accounting.budget.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "budgets")
public class Budget {

    @Id
    private String id;

    private String name;

    private int fiscalYear;

    private LocalDate startDate;

    private LocalDate endDate;

    private List<BudgetLine> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BudgetLine {

        private String accountId;

        private double plannedAmount;

        private double actualAmount;
    }
}