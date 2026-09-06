package com.urbanfurniture.accounting.dto;

import java.time.LocalDateTime;
import java.util.List;

public record JournalResponse(

        String id,

        String reference,

        String description,

        double totalDebit,

        double totalCredit,

        List<JournalLineResponse> lines,

        LocalDateTime createdAt

) {
}