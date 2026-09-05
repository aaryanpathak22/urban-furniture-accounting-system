package com.urbanfurniture.accounting.sales.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.sales.model.Invoice;
import com.urbanfurniture.accounting.sales.service.InvoiceService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/invoices")
@RequiredArgsConstructor
public class InvoiceController {

    private final InvoiceService invoiceService;

    @PostMapping
    public ResponseEntity<Invoice> create(
            @RequestBody Invoice invoice) {

        return ResponseEntity.ok(
                invoiceService.createInvoice(invoice)
        );
    }


    @GetMapping
    public ResponseEntity<List<Invoice>> getAll() {

        return ResponseEntity.ok(
                invoiceService.getAllInvoices()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Invoice> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                invoiceService.getInvoiceById(id)
        );
    }


    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<Invoice>> getByCustomer(
            @PathVariable String customerId) {

        return ResponseEntity.ok(
                invoiceService.getByCustomer(customerId)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<Invoice> update(
            @PathVariable String id,
            @RequestBody Invoice invoice) {

        return ResponseEntity.ok(
                invoiceService.updateInvoice(id, invoice)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        invoiceService.deleteInvoice(id);

        return ResponseEntity.noContent().build();
    }
}