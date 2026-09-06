package com.urbanfurniture.accounting.inventory.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.inventory.model.Inventory;
import com.urbanfurniture.accounting.inventory.service.InventoryService;


@RestController
@RequestMapping("/api/inventory")
@CrossOrigin(origins = "*")
public class InventoryController {


    private final InventoryService inventoryService;


    public InventoryController(InventoryService inventoryService) {

        this.inventoryService = inventoryService;

    }


    // GET ALL INVENTORY
    @GetMapping
    public List<Inventory> getInventory() {

        return inventoryService.getAllInventory();

    }


    // GET INVENTORY BY ID
    @GetMapping("/{id}")
    public Inventory getInventoryById(
            @PathVariable String id
    ) {

        return inventoryService.getInventoryById(id);

    }


    // CREATE INVENTORY
    @PostMapping
    public Inventory createInventory(
            @RequestBody Inventory inventory
    ) {

        return inventoryService.saveInventory(inventory);

    }


    // UPDATE INVENTORY
    @PutMapping("/{id}")
    public Inventory updateInventory(
            @PathVariable String id,
            @RequestBody Inventory inventory
    ) {

        return inventoryService.updateInventory(id, inventory);

    }


    // DELETE INVENTORY
    @DeleteMapping("/{id}")
    public String deleteInventory(
            @PathVariable String id
    ) {

        inventoryService.deleteInventory(id);

        return "Inventory deleted successfully";

    }

}