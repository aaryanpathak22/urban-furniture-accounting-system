package com.urbanfurniture.accounting.budget.model;

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
@Document(collection = "analytic_accounts")
public class AnalyticAccount {

    @Id
    private String id;

    private String name;

    private String code;

    private String description;

    private boolean active;
}