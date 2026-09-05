package com.urbanfurniture.accounting.accounting.model;

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
@Document(collection = "accounts")
public class Account {

    @Id
    private String id;

    private String code;

    private String name;

    private AccountType type;

    private String description;

    private String parentAccountId;

    private boolean active;

    public enum AccountType {
        ASSET,
        LIABILITY,
        EQUITY,
        REVENUE,
        EXPENSE
    }
}