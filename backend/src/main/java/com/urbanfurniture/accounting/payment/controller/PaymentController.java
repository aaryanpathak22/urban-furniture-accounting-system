package com.urbanfurniture.accounting.payment.controller;

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

import com.urbanfurniture.accounting.payment.model.Payment;
import com.urbanfurniture.accounting.payment.service.PaymentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/payments")
@RequiredArgsConstructor
public class PaymentController {

    private final PaymentService paymentService;


    @PostMapping
    public ResponseEntity<Payment> create(
            @RequestBody Payment payment) {

        return ResponseEntity.ok(
                paymentService.createPayment(payment)
        );
    }


    @GetMapping
    public ResponseEntity<List<Payment>> getAll() {

        return ResponseEntity.ok(
                paymentService.getAllPayments()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Payment> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                paymentService.getPaymentById(id)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<Payment> update(
            @PathVariable String id,
            @RequestBody Payment payment) {

        return ResponseEntity.ok(
                paymentService.updatePayment(id, payment)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        paymentService.deletePayment(id);

        return ResponseEntity.noContent().build();
    }
}