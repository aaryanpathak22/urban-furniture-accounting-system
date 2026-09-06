package com.urbanfurniture.accounting.dashboard.service;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.inventory.repository.InventoryRepository;
import com.urbanfurniture.accounting.payment.model.Payment;
import com.urbanfurniture.accounting.payment.repository.PaymentRepository;
import com.urbanfurniture.accounting.product.repository.ProductRepository;
import com.urbanfurniture.accounting.sales.model.SalesOrder;
import com.urbanfurniture.accounting.sales.repository.InvoiceRepository;
import com.urbanfurniture.accounting.sales.repository.SalesOrderRepository;


@Service
public class DashboardService {


    private final ProductRepository productRepository;
    private final InventoryRepository inventoryRepository;
    private final SalesOrderRepository salesOrderRepository;
    private final InvoiceRepository invoiceRepository;
    private final PaymentRepository paymentRepository;



    public DashboardService(
            ProductRepository productRepository,
            InventoryRepository inventoryRepository,
            SalesOrderRepository salesOrderRepository,
            InvoiceRepository invoiceRepository,
            PaymentRepository paymentRepository
    ) {

        this.productRepository = productRepository;
        this.inventoryRepository = inventoryRepository;
        this.salesOrderRepository = salesOrderRepository;
        this.invoiceRepository = invoiceRepository;
        this.paymentRepository = paymentRepository;

    }





    public Map<String,Object> getDashboardData() {


        Map<String,Object> dashboard = new HashMap<>();



        /*
         * BASIC COUNTS
         */


        dashboard.put(
                "totalProducts",
                productRepository.count()
        );


        dashboard.put(
                "totalInventoryItems",
                inventoryRepository.count()
        );


        dashboard.put(
                "totalSalesOrders",
                salesOrderRepository.count()
        );


        dashboard.put(
                "totalInvoices",
                invoiceRepository.count()
        );


        dashboard.put(
                "totalPayments",
                paymentRepository.count()
        );






        /*
         * REVENUE CALCULATION
         *
         * If totalAmount exists in database,
         * use it.
         *
         * Otherwise calculate using a default
         * value so dashboard does not stay empty.
         */


        List<SalesOrder> orders =
                salesOrderRepository.findAll();



        double totalRevenue =
                orders.stream()
                .mapToDouble(order -> {

                    if(order.getTotalAmount()!=null){

                        return order.getTotalAmount();

                    }

                    return 0.0;

                })
                .sum();



        dashboard.put(
                "totalRevenue",
                totalRevenue
        );







        /*
         * PAYMENT STATUS
         */


        List<Payment> payments =
                paymentRepository.findAll();




        long completedPayments =
                payments.stream()
                .filter(payment ->
                        payment.getStatus()
                        == Payment.PaymentStatus.COMPLETED
                )
                .count();





        long pendingPayments =
                payments.stream()
                .filter(payment ->
                        payment.getStatus()
                        == Payment.PaymentStatus.PENDING
                )
                .count();





        long cancelledPayments =
                payments.stream()
                .filter(payment ->
                        payment.getStatus()
                        == Payment.PaymentStatus.CANCELLED
                )
                .count();





        dashboard.put(
                "completedPayments",
                completedPayments
        );


        dashboard.put(
                "pendingPayments",
                pendingPayments
        );


        dashboard.put(
                "cancelledPayments",
                cancelledPayments
        );






        /*
         * LOW STOCK PRODUCTS
         */


        dashboard.put(
                "lowStockProducts",

                inventoryRepository.findAll()
                .stream()
                .filter(item ->
                        item.getQuantityAvailable()!=null
                        &&
                        item.getQuantityAvailable()<10
                )
                .toList()
        );



        return dashboard;


    }


}