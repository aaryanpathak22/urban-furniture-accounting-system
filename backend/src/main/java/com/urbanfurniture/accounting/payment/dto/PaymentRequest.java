package com.urbanfurniture.accounting.payment.dto;

import java.time.LocalDate;

import lombok.Data;

@Data
public class PaymentRequest {

    private String referenceNumber;

    private String customerId;

    private String vendorId;

    private String invoiceId;

    private double amount;

    private String paymentMethod;

    private LocalDate paymentDate;

    private String status;
}