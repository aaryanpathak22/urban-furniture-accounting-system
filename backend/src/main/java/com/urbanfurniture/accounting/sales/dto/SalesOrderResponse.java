package com.urbanfurniture.accounting.sales.dto;

import java.time.LocalDateTime;
import java.util.List;

public record SalesOrderResponse(

        String id,

        String customerId,

        List<String> productIds,

        double totalAmount,

        String status,

        LocalDateTime createdAt

) {
}