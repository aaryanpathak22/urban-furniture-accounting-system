package com.urbanfurniture.accounting.payment.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.payment.model.Payment;

public interface PaymentRepository extends MongoRepository<Payment, String> {

    Optional<Payment> findByPaymentNumber(String paymentNumber);

    boolean existsByPaymentNumber(String paymentNumber);

    List<Payment> findByReferenceId(String referenceId);
}