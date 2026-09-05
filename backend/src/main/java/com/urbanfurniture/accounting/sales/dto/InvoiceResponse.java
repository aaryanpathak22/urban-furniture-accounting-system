package com.urbanfurniture.accounting.sales.dto;

import java.time.LocalDate;

import com.urbanfurniture.accounting.sales.model.Invoice.InvoiceStatus;

public record InvoiceResponse(

        String id,

        String invoiceNumber,

        String salesOrderId,

        String customerId,

        double subtotal,

        double taxAmount,

        double totalAmount,

        double paidAmount,

        InvoiceStatus status,

        LocalDate invoiceDate,

        LocalDate dueDate

) {
}