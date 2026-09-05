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
@Document(collection = "vendor_bills")
public class VendorBill {

    @Id
    private String id;

    private String billNumber;

    private String purchaseOrderId;

    private String vendorId;

    private LocalDate billDate;

    private LocalDate dueDate;

    private List<VendorBillItem> items;

    private double subtotal;

    private double taxAmount;

    private double totalAmount;

    private double paidAmount;

    private VendorBillStatus status;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class VendorBillItem {

        private String productId;

        private int quantity;

        private double unitPrice;

        private double taxRate;

        private double lineTotal;
    }

    public enum VendorBillStatus {
        DRAFT,
        ISSUED,
        PARTIALLY_PAID,
        PAID,
        CANCELLED
    }
}