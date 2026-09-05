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
@Document(collection = "invoices")
public class Invoice {

    @Id
    private String id;

    private String invoiceNumber;

    private String salesOrderId;

    private String customerId;

    private LocalDate invoiceDate;

    private LocalDate dueDate;

    private List<InvoiceItem> items;

    private double subtotal;

    private double taxAmount;

    private double totalAmount;

    private double paidAmount;

    private InvoiceStatus status;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class InvoiceItem {

        private String productId;

        private int quantity;

        private double unitPrice;

        private double taxRate;

        private double lineTotal;
    }

    public enum InvoiceStatus {
        DRAFT,
        ISSUED,
        PARTIALLY_PAID,
        PAID,
        CANCELLED
    }
}