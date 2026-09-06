package com.urbanfurniture.accounting.dto;

public record JournalLineResponse(

        String accountId,

        double debit,

        double credit

) {
}