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

import com.urbanfurniture.accounting.sales.model.SalesOrder;
import com.urbanfurniture.accounting.sales.service.SalesOrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/sales-orders")
@RequiredArgsConstructor
public class SalesOrderController {

    private final SalesOrderService salesOrderService;


    @PostMapping
    public ResponseEntity<SalesOrder> create(
            @RequestBody SalesOrder salesOrder) {

        System.out.println("CONTROLLER RECEIVED: " + salesOrder);

        return ResponseEntity.ok(
                salesOrderService.createSalesOrder(salesOrder)
        );
    }


    @GetMapping
    public ResponseEntity<List<SalesOrder>> getAll() {

        return ResponseEntity.ok(
                salesOrderService.getAllSalesOrders()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<SalesOrder> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                salesOrderService.getSalesOrderById(id)
        );
    }


    @GetMapping("/customer/{customerId}")
    public ResponseEntity<List<SalesOrder>> getByCustomer(
            @PathVariable String customerId) {

        return ResponseEntity.ok(
                salesOrderService.getByCustomer(customerId)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<SalesOrder> update(
            @PathVariable String id,
            @RequestBody SalesOrder salesOrder) {

        return ResponseEntity.ok(
                salesOrderService.updateSalesOrder(id, salesOrder)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        salesOrderService.deleteSalesOrder(id);

        return ResponseEntity.noContent().build();
    }
}