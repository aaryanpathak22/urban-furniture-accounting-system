package com.urbanfurniture.accounting.payment.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.payment.model.Payment;
import com.urbanfurniture.accounting.payment.repository.PaymentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PaymentService {

    private final PaymentRepository paymentRepository;


    public Payment createPayment(Payment payment) {

        if (payment.getPaymentDate() == null) {
            payment.setPaymentDate(LocalDate.now());
        }

        if (payment.getStatus() == null) {
            payment.setStatus(Payment.PaymentStatus.PENDING);
        }

        return paymentRepository.save(payment);
    }


    public List<Payment> getAllPayments() {

        return paymentRepository.findAll();
    }


    public Payment getPaymentById(String id) {

        return paymentRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException(
                                "Payment not found with id: " + id
                        )
                );
    }


    public Payment updatePayment(
            String id,
            Payment updatedPayment) {

        Payment existing = getPaymentById(id);


        if (updatedPayment.getPaymentNumber() != null) {
            existing.setPaymentNumber(updatedPayment.getPaymentNumber());
        }


        if (updatedPayment.getType() != null) {
            existing.setType(updatedPayment.getType());
        }


        if (updatedPayment.getReferenceId() != null) {
            existing.setReferenceId(updatedPayment.getReferenceId());
        }


        if (updatedPayment.getPaymentDate() != null) {
            existing.setPaymentDate(updatedPayment.getPaymentDate());
        }


        if (updatedPayment.getAmount() != 0) {
            existing.setAmount(updatedPayment.getAmount());
        }


        if (updatedPayment.getMethod() != null) {
            existing.setMethod(updatedPayment.getMethod());
        }


        if (updatedPayment.getJournalId() != null) {
            existing.setJournalId(updatedPayment.getJournalId());
        }


        if (updatedPayment.getStatus() != null) {
            existing.setStatus(updatedPayment.getStatus());
        }


        return paymentRepository.save(existing);
    }


    public void deletePayment(String id) {

        paymentRepository.deleteById(id);
    }
}