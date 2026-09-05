package com.urbanfurniture.accounting.accounting.dto;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record JournalRequest(

        @NotBlank(message = "Journal reference is required")
        String reference,

        String description,

        @NotEmpty(message = "Journal lines are required")
        List<JournalLineRequest> lines

) {
}