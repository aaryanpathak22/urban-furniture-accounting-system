package com.urbanfurniture.accounting.accounting.dto;

public record JournalLineResponse(

        String accountId,

        double debit,

        double credit

) {
}