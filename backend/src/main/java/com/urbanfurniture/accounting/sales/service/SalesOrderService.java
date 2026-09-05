package com.urbanfurniture.accounting.sales.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.sales.model.SalesOrder;
import com.urbanfurniture.accounting.sales.repository.SalesOrderRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class SalesOrderService {

    private final SalesOrderRepository salesOrderRepository;


    public SalesOrder createSalesOrder(SalesOrder salesOrder) {

        salesOrder.setOrderDate(LocalDate.now());
        salesOrder.setStatus(SalesOrder.OrderStatus.DRAFT);

        calculateTotals(salesOrder);

        return salesOrderRepository.save(salesOrder);
    }


    public List<SalesOrder> getAllSalesOrders() {

        return salesOrderRepository.findAll();
    }


    public SalesOrder getSalesOrderById(String id) {

        return salesOrderRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Sales Order not found")
                );
    }


    public SalesOrder getByOrderNumber(String orderNumber) {

        return salesOrderRepository.findByOrderNumber(orderNumber)
                .orElseThrow(
                        () -> new RuntimeException("Sales Order not found")
                );
    }


    public List<SalesOrder> getByCustomer(String customerId) {

        return salesOrderRepository.findByCustomerId(customerId);
    }


    public SalesOrder updateSalesOrder(
            String id,
            SalesOrder updatedOrder) {

        SalesOrder existing = getSalesOrderById(id);

        existing.setCustomerId(updatedOrder.getCustomerId());
        existing.setOrderDate(updatedOrder.getOrderDate());
        existing.setStatus(updatedOrder.getStatus());
        existing.setItems(updatedOrder.getItems());

        calculateTotals(existing);

        return salesOrderRepository.save(existing);
    }


    public void deleteSalesOrder(String id) {

        salesOrderRepository.deleteById(id);
    }


    private void calculateTotals(SalesOrder salesOrder) {

        double subtotal = 0;
        double taxAmount = 0;

        if (salesOrder.getItems() != null) {

            for (SalesOrder.SalesOrderItem item : salesOrder.getItems()) {

                double lineTotal =
                        item.getQuantity() * item.getUnitPrice();

                item.setLineTotal(lineTotal);

                subtotal += lineTotal;

                taxAmount +=
                        lineTotal * item.getTaxRate() / 100;
            }
        }

        salesOrder.setSubtotal(subtotal);
        salesOrder.setTaxAmount(taxAmount);
        salesOrder.setTotalAmount(subtotal + taxAmount);
    }
}