package com.urbanfurniture.accounting.purchase.model;

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
@Document(collection = "purchase_orders")
public class PurchaseOrder {

    @Id
    private String id;

    private String orderNumber;

    private String vendorId;

    private LocalDate orderDate;

    private List<PurchaseOrderItem> items;

    private double subtotal;

    private double taxAmount;

    private double totalAmount;

    private OrderStatus status;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class PurchaseOrderItem {

        private String productId;

        private int quantity;

        private double unitPrice;

        private double taxRate;

        private double lineTotal;
    }

    public enum OrderStatus {
        DRAFT,
        CONFIRMED,
        CANCELLED
    }
}