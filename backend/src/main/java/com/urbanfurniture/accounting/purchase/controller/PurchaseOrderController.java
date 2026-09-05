package com.urbanfurniture.accounting.purchase.controller;

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

import com.urbanfurniture.accounting.purchase.model.PurchaseOrder;
import com.urbanfurniture.accounting.purchase.service.PurchaseOrderService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/purchase-orders")
@RequiredArgsConstructor
public class PurchaseOrderController {

    private final PurchaseOrderService purchaseOrderService;

    @PostMapping
    public ResponseEntity<PurchaseOrder> create(
            @RequestBody PurchaseOrder purchaseOrder) {

        return ResponseEntity.ok(
                purchaseOrderService.createPurchaseOrder(purchaseOrder)
        );
    }

    @GetMapping
    public ResponseEntity<List<PurchaseOrder>> getAll() {

        return ResponseEntity.ok(
                purchaseOrderService.getAllPurchaseOrders()
        );
    }

    @GetMapping("/{id}")
    public ResponseEntity<PurchaseOrder> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                purchaseOrderService.getPurchaseOrderById(id)
        );
    }

    @PutMapping("/{id}")
    public ResponseEntity<PurchaseOrder> update(
            @PathVariable String id,
            @RequestBody PurchaseOrder purchaseOrder) {

        return ResponseEntity.ok(
                purchaseOrderService.updatePurchaseOrder(id, purchaseOrder)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        purchaseOrderService.deletePurchaseOrder(id);

        return ResponseEntity.noContent().build();
    }
}