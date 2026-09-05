package com.urbanfurniture.accounting.sales.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "sales_orders")
public class SalesOrder {

    @Id
    private String id;

    private String orderNumber;

    private String customerId;

    private LocalDate orderDate;

    private List<SalesOrderItem> items;

    private Double subtotal;

    private Double taxAmount;

    private Double totalAmount;

    private OrderStatus status;


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class SalesOrderItem {

        private String productId;

        private Integer quantity;

        private Double unitPrice;

        private Double taxRate;

        private Double lineTotal;
    }


    public enum OrderStatus {
        DRAFT,
        CONFIRMED,
        CANCELLED
    }
}