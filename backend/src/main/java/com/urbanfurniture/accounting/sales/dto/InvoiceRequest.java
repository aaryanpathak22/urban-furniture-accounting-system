package com.urbanfurniture.accounting.sales.dto;

import java.time.LocalDate;
import java.util.List;

import com.urbanfurniture.accounting.sales.model.Invoice.InvoiceItem;

public record InvoiceRequest(

        String salesOrderId,

        String customerId,

        LocalDate dueDate,

        List<InvoiceItem> items

) {
}