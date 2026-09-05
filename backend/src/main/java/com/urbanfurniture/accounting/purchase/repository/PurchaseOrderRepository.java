package com.urbanfurniture.accounting.purchase.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.purchase.model.PurchaseOrder;

public interface PurchaseOrderRepository extends MongoRepository<PurchaseOrder, String> {

    Optional<PurchaseOrder> findByOrderNumber(String orderNumber);

    boolean existsByOrderNumber(String orderNumber);
}