package com.urbanfurniture.accounting.sales.dto;

import java.util.List;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

public record SalesOrderRequest(

        @NotBlank(message = "Customer ID is required")
        String customerId,

        @NotEmpty(message = "Products are required")
        List<String> productIds

) {
}