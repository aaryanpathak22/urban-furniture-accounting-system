package com.urbanfurniture.accounting.product.dto;


import lombok.Data;


@Data
public class ProductRequest {

    private String productId;

    private String name;

    private String category;

    private Double price;

    private Integer quantity;

    private String description;

}