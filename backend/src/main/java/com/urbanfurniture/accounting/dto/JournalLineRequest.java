package com.urbanfurniture.accounting.dto;

import jakarta.validation.constraints.PositiveOrZero;

public record JournalLineRequest(

        String accountId,

        @PositiveOrZero(message = "Debit cannot be negative")
        double debit,

        @PositiveOrZero(message = "Credit cannot be negative")
        double credit

) {
}