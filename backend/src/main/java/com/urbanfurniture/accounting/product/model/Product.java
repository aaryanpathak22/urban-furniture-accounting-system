package com.urbanfurniture.accounting.product.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "products")
public class Product {

    @Id
    private String id;

    private String productId;

    private String name;

    private String category;

    private Double price;

    private Integer quantity;

    private String description;

}