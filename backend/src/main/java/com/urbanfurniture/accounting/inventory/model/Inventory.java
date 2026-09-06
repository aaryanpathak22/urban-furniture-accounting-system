package com.urbanfurniture.accounting.inventory.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "inventory")
public class Inventory {


    @Id
    private String id;


    private String inventoryId;

    private String productId;

    private String productName;

    private Integer quantityAvailable;

    private String warehouse;

    private String lastUpdated;

}