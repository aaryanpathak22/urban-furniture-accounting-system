package com.urbanfurniture.accounting.purchase.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.purchase.model.VendorBill;
import com.urbanfurniture.accounting.purchase.repository.VendorBillRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class VendorBillService {

    private final VendorBillRepository vendorBillRepository;


    public VendorBill createVendorBill(VendorBill bill) {

        bill.setBillDate(LocalDate.now());

        calculateTotal(bill);

        return vendorBillRepository.save(bill);
    }


    public List<VendorBill> getAllVendorBills() {

        return vendorBillRepository.findAll();
    }


    public VendorBill getVendorBillById(String id) {

        return vendorBillRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Vendor Bill not found")
                );
    }


    public VendorBill getByBillNumber(String billNumber) {

        return vendorBillRepository.findByBillNumber(billNumber)
                .orElseThrow(
                        () -> new RuntimeException("Vendor Bill not found")
                );
    }


    public VendorBill updateVendorBill(
            String id,
            VendorBill updatedBill) {

        VendorBill existing = getVendorBillById(id);

        existing.setVendorId(updatedBill.getVendorId());
        existing.setPurchaseOrderId(updatedBill.getPurchaseOrderId());
        existing.setBillDate(updatedBill.getBillDate());
        existing.setDueDate(updatedBill.getDueDate());
        existing.setItems(updatedBill.getItems());
        existing.setStatus(updatedBill.getStatus());

        calculateTotal(existing);

        return vendorBillRepository.save(existing);
    }


    public void deleteVendorBill(String id) {

        vendorBillRepository.deleteById(id);
    }


    private void calculateTotal(VendorBill bill) {

        double total = 0;

        if (bill.getItems() != null) {

            for (VendorBill.VendorBillItem item : bill.getItems()) {

                double lineTotal =
                        item.getQuantity() * item.getUnitPrice();

                item.setLineTotal(lineTotal);

                total += lineTotal;
            }
        }

        bill.setTotalAmount(total);
    }
}