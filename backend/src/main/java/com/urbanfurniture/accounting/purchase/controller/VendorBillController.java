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

import com.urbanfurniture.accounting.purchase.model.VendorBill;
import com.urbanfurniture.accounting.purchase.service.VendorBillService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/vendor-bills")
@RequiredArgsConstructor
public class VendorBillController {

    private final VendorBillService vendorBillService;


    @PostMapping
    public ResponseEntity<VendorBill> create(
            @RequestBody VendorBill bill) {

        return ResponseEntity.ok(
                vendorBillService.createVendorBill(bill)
        );
    }


    @GetMapping
    public ResponseEntity<List<VendorBill>> getAll() {

        return ResponseEntity.ok(
                vendorBillService.getAllVendorBills()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<VendorBill> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                vendorBillService.getVendorBillById(id)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<VendorBill> update(
            @PathVariable String id,
            @RequestBody VendorBill bill) {

        return ResponseEntity.ok(
                vendorBillService.updateVendorBill(id, bill)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        vendorBillService.deleteVendorBill(id);

        return ResponseEntity.noContent().build();
    }
}