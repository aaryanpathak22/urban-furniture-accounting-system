package com.urbanfurniture.accounting.inventory.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.inventory.model.Inventory;
import com.urbanfurniture.accounting.inventory.repository.InventoryRepository;


@Service
public class InventoryService {


    private final InventoryRepository inventoryRepository;


    public InventoryService(InventoryRepository inventoryRepository) {

        this.inventoryRepository = inventoryRepository;

    }


    // GET ALL INVENTORY
    public List<Inventory> getAllInventory() {

        return inventoryRepository.findAll();

    }


    // GET INVENTORY BY ID
    public Inventory getInventoryById(String id) {

        return inventoryRepository.findById(id)
                .orElse(null);

    }


    // CREATE INVENTORY
    public Inventory saveInventory(Inventory inventory) {

        return inventoryRepository.save(inventory);

    }


    // UPDATE INVENTORY
    public Inventory updateInventory(String id, Inventory updatedInventory) {

        return inventoryRepository.findById(id)
                .map(inventory -> {

                    inventory.setInventoryId(updatedInventory.getInventoryId());
                    inventory.setProductId(updatedInventory.getProductId());
                    inventory.setProductName(updatedInventory.getProductName());
                    inventory.setQuantityAvailable(updatedInventory.getQuantityAvailable());
                    inventory.setWarehouse(updatedInventory.getWarehouse());
                    inventory.setLastUpdated(updatedInventory.getLastUpdated());

                    return inventoryRepository.save(inventory);

                })
                .orElse(null);

    }


    // DELETE INVENTORY
    public void deleteInventory(String id) {

        inventoryRepository.deleteById(id);

    }

}