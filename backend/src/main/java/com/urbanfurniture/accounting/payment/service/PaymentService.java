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
                        () -> new RuntimeException("Payment not found")
                );
    }


    public Payment updatePayment(
            String id,
            Payment updatedPayment) {

        Payment existing = getPaymentById(id);

        existing.setPaymentNumber(updatedPayment.getPaymentNumber());
        existing.setType(updatedPayment.getType());
        existing.setReferenceId(updatedPayment.getReferenceId());
        existing.setPaymentDate(updatedPayment.getPaymentDate());
        existing.setAmount(updatedPayment.getAmount());
        existing.setMethod(updatedPayment.getMethod());
        existing.setJournalId(updatedPayment.getJournalId());
        existing.setStatus(updatedPayment.getStatus());

        return paymentRepository.save(existing);
    }


    public void deletePayment(String id) {

        paymentRepository.deleteById(id);
    }
}