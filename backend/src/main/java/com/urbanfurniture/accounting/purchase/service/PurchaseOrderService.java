package com.urbanfurniture.accounting.purchase.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.purchase.model.PurchaseOrder;
import com.urbanfurniture.accounting.purchase.repository.PurchaseOrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PurchaseOrderService {

    private final PurchaseOrderRepository purchaseOrderRepository;


    public PurchaseOrder createPurchaseOrder(PurchaseOrder purchaseOrder) {

        purchaseOrder.setOrderDate(LocalDate.now());

        calculateTotals(purchaseOrder);

        return purchaseOrderRepository.save(purchaseOrder);
    }


    public List<PurchaseOrder> getAllPurchaseOrders() {

        return purchaseOrderRepository.findAll();
    }


    public PurchaseOrder getPurchaseOrderById(String id) {

        return purchaseOrderRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Purchase Order not found")
                );
    }


    public PurchaseOrder getByOrderNumber(String orderNumber) {

        return purchaseOrderRepository.findByOrderNumber(orderNumber)
                .orElseThrow(
                        () -> new RuntimeException("Purchase Order not found")
                );
    }


    public PurchaseOrder updatePurchaseOrder(
            String id,
            PurchaseOrder updatedOrder) {

        PurchaseOrder existing = getPurchaseOrderById(id);

        existing.setVendorId(updatedOrder.getVendorId());
        existing.setOrderDate(updatedOrder.getOrderDate());
        existing.setItems(updatedOrder.getItems());
        existing.setStatus(updatedOrder.getStatus());

        calculateTotals(existing);

        return purchaseOrderRepository.save(existing);
    }


    public void deletePurchaseOrder(String id) {

        purchaseOrderRepository.deleteById(id);
    }


    private void calculateTotals(PurchaseOrder purchaseOrder) {

        double subtotal = 0;
        double taxAmount = 0;

        if (purchaseOrder.getItems() != null) {

            for (PurchaseOrder.PurchaseOrderItem item 
                    : purchaseOrder.getItems()) {

                double lineTotal =
                        item.getQuantity() * item.getUnitPrice();

                item.setLineTotal(lineTotal);

                subtotal += lineTotal;

                taxAmount +=
                        lineTotal * item.getTaxRate() / 100;
            }
        }

        purchaseOrder.setSubtotal(subtotal);
        purchaseOrder.setTaxAmount(taxAmount);
        purchaseOrder.setTotalAmount(subtotal + taxAmount);
    }
}