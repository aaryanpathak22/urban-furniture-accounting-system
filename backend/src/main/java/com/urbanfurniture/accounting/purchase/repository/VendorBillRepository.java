package com.urbanfurniture.accounting.purchase.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.purchase.model.VendorBill;

public interface VendorBillRepository extends MongoRepository<VendorBill, String> {

    Optional<VendorBill> findByBillNumber(String billNumber);

    boolean existsByBillNumber(String billNumber);

    List<VendorBill> findByVendorId(String vendorId);
}