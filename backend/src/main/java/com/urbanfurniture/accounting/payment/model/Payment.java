package com.urbanfurniture.accounting.payment.model;

import java.time.LocalDate;

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
@Document(collection = "payments")
public class Payment {

    @Id
    private String id;

    private String paymentNumber;

    private PaymentType type;

    private String referenceId;

    private LocalDate paymentDate;

    private double amount;

    private PaymentMethod method;

    private String journalId;

    private PaymentStatus status;

    public enum PaymentType {
        CUSTOMER,
        VENDOR
    }

    public enum PaymentMethod {
        CASH,
        BANK
    }

    public enum PaymentStatus {
        PENDING,
        COMPLETED,
        CANCELLED
    }
}