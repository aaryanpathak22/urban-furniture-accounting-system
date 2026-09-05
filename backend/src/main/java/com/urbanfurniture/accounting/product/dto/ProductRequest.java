package com.urbanfurniture.accounting.product.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.PositiveOrZero;

public record ProductRequest(

        @NotBlank(message = "Product name is required")
        String name,

        @NotBlank(message = "SKU is required")
        String sku,

        String description,

        String category,

        @PositiveOrZero(message = "Unit price cannot be negative")
        double unitPrice,

        @PositiveOrZero(message = "Cost price cannot be negative")
        double costPrice,

        @PositiveOrZero(message = "Tax rate cannot be negative")
        double taxRate,

        @Min(value = 0, message = "Stock quantity cannot be negative")
        int stockQuantity
) {
}