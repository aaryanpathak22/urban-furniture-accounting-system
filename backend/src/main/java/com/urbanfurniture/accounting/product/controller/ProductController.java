package com.urbanfurniture.accounting.product.controller;


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

import com.urbanfurniture.accounting.product.model.Product;
import com.urbanfurniture.accounting.product.service.ProductService;


@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "*")
public class ProductController {


    private final ProductService productService;


    public ProductController(ProductService productService) {

        this.productService = productService;

    }


    // GET ALL PRODUCTS
    @GetMapping
    public List<Product> getProducts(){

        return productService.getAllProducts();

    }


    // GET PRODUCT BY ID
    @GetMapping("/{id}")
    public Product getProductById(
            @PathVariable String id
    ){

        return productService.getProductById(id);

    }


    // CREATE PRODUCT
    @PostMapping
    public Product createProduct(
            @RequestBody Product product
    ){

        return productService.saveProduct(product);

    }


    // UPDATE PRODUCT
    @PutMapping("/{id}")
    public Product updateProduct(
            @PathVariable String id,
            @RequestBody Product product
    ){

        return productService.updateProduct(id, product);

    }


    // DELETE PRODUCT
    @DeleteMapping("/{id}")
    public String deleteProduct(
            @PathVariable String id
    ){

        productService.deleteProduct(id);

        return "Product deleted successfully";

    }

}