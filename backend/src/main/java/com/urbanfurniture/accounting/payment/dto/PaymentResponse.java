package com.urbanfurniture.accounting.payment.dto;

import java.time.LocalDate;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class PaymentResponse {

    private String id;

    private String referenceNumber;

    private String customerId;

    private String vendorId;

    private String invoiceId;

    private double amount;

    private String paymentMethod;

    private LocalDate paymentDate;

    private String status;

    private String createdAt;
}