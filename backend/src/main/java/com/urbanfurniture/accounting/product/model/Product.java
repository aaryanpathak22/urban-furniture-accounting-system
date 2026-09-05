package com.urbanfurniture.accounting.product.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String name;

    private String sku;

    private String description;

    private String category;

    private double unitPrice;

    private double costPrice;

    private double taxRate;

    private int stockQuantity;

    private boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;
}