package com.urbanfurniture.accounting.accounting.dto;

import com.urbanfurniture.accounting.accounting.model.Account;

public record AccountResponse(

        String id,

        String code,

        String name,

        Account.AccountType type,

        String description,

        String parentAccountId,

        boolean active
) {
}