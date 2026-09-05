package com.urbanfurniture.accounting.sales.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.sales.model.Invoice;
import com.urbanfurniture.accounting.sales.repository.InvoiceRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class InvoiceService {

    private final InvoiceRepository invoiceRepository;


    public Invoice createInvoice(Invoice invoice) {

        invoice.setInvoiceDate(LocalDate.now());
        invoice.setStatus(Invoice.InvoiceStatus.ISSUED);

        if (invoice.getPaidAmount() == null) {
            invoice.setPaidAmount(0.0);
        }

        calculateTotals(invoice);

        return invoiceRepository.save(invoice);
    }


    public List<Invoice> getAllInvoices() {

        return invoiceRepository.findAll();
    }


    public Invoice getInvoiceById(String id) {

        return invoiceRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Invoice not found with id: " + id
                        )
                );
    }


    public List<Invoice> getByCustomer(String customerId) {

        return invoiceRepository.findByCustomerId(customerId);
    }


    public Invoice updateInvoice(
            String id,
            Invoice updatedInvoice) {

        Invoice existing = getInvoiceById(id);


        if (updatedInvoice.getDueDate() != null) {
            existing.setDueDate(updatedInvoice.getDueDate());
        }


        if (updatedInvoice.getItems() != null) {
            existing.setItems(updatedInvoice.getItems());
            calculateTotals(existing);
        }


        if (updatedInvoice.getPaidAmount() != null) {
            existing.setPaidAmount(updatedInvoice.getPaidAmount());
        }


        if (updatedInvoice.getStatus() != null) {
            existing.setStatus(updatedInvoice.getStatus());
        }


        return invoiceRepository.save(existing);
    }


    public void deleteInvoice(String id) {

        invoiceRepository.deleteById(id);
    }


    private void calculateTotals(Invoice invoice) {

        double subtotal = 0.0;
        double taxAmount = 0.0;


        if (invoice.getItems() != null) {

            for (Invoice.InvoiceItem item : invoice.getItems()) {

                double lineTotal =
                        item.getQuantity() * item.getUnitPrice();

                item.setLineTotal(lineTotal);

                subtotal += lineTotal;

                taxAmount +=
                        lineTotal * item.getTaxRate() / 100;
            }
        }


        invoice.setSubtotal(subtotal);
        invoice.setTaxAmount(taxAmount);
        invoice.setTotalAmount(subtotal + taxAmount);
    }
}