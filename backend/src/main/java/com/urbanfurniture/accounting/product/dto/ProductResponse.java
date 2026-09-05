package com.urbanfurniture.accounting.product.dto;

import java.time.LocalDateTime;

public record ProductResponse(
        String id,
        String name,
        String sku,
        String description,
        String category,
        double unitPrice,
        double costPrice,
        double taxRate,
        int stockQuantity,
        boolean active,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}