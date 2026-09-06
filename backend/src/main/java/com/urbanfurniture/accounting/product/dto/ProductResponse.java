package com.urbanfurniture.accounting.product.dto;

import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class ProductResponse {


    private String id;

    private String productId;

    private String name;

    private String category;

    private Double price;

    private Integer quantity;

}