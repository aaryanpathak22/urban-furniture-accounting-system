package com.urbanfurniture.accounting.purchase.dto;

import java.time.LocalDate;
import java.util.List;

import lombok.Data;

@Data
public class PurchaseOrderRequest {

    private String vendorId;

    private LocalDate orderDate;

    private List<PurchaseOrderItemRequest> items;


    @Data
    public static class PurchaseOrderItemRequest {

        private String productId;

        private int quantity;

        private double unitPrice;

        private double taxRate;
    }
}