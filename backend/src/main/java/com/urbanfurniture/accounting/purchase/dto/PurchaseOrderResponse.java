package com.urbanfurniture.accounting.purchase.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PurchaseOrderResponse {

    private String id;

    private String orderNumber;

    private String vendorId;

    private LocalDate orderDate;

    private List<PurchaseOrderItemResponse> items;

    private double subtotal;

    private double taxAmount;

    private double totalAmount;

    private String status;


    @Data
    @Builder
    public static class PurchaseOrderItemResponse {

        private String productId;

        private int quantity;

        private double unitPrice;

        private double taxRate;

        private double lineTotal;
    }
}