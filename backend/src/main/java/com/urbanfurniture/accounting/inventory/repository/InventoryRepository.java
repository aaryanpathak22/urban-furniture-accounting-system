package com.urbanfurniture.accounting.inventory.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.inventory.model.Inventory;


public interface InventoryRepository 
        extends MongoRepository<Inventory, String> {


}