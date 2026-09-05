package com.urbanfurniture.accounting.accounting.dto;

import com.urbanfurniture.accounting.accounting.model.Account;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record AccountRequest(

        @NotBlank(message = "Account code is required")
        String code,

        @NotBlank(message = "Account name is required")
        String name,

        @NotNull(message = "Account type is required")
        Account.AccountType type,

        String description,

        String parentAccountId
) {
}