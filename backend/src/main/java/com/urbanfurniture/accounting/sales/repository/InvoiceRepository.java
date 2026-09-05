package com.urbanfurniture.accounting.sales.repository;

import com.urbanfurniture.accounting.sales.model.Invoice;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface InvoiceRepository extends MongoRepository<Invoice, String> {

    Optional<Invoice> findByInvoiceNumber(String invoiceNumber);

    boolean existsByInvoiceNumber(String invoiceNumber);

    java.util.List<Invoice> findByCustomerId(String customerId);
}