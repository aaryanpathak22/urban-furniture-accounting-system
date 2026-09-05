package com.urbanfurniture.accounting.sales.repository;

import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.sales.model.SalesOrder;

public interface SalesOrderRepository extends MongoRepository<SalesOrder, String> {

    Optional<SalesOrder> findByOrderNumber(String orderNumber);

    boolean existsByOrderNumber(String orderNumber);
}