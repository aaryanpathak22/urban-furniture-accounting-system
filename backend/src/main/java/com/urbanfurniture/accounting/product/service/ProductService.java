package com.urbanfurniture.accounting.product.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.product.model.Product;
import com.urbanfurniture.accounting.product.repository.ProductRepository;


@Service
public class ProductService {

    private final ProductRepository productRepository;


    public ProductService(ProductRepository productRepository) {

        this.productRepository = productRepository;

    }


    // GET ALL PRODUCTS
    public List<Product> getAllProducts() {

        return productRepository.findAll();

    }


    // CREATE PRODUCT
    public Product saveProduct(Product product) {

        return productRepository.save(product);

    }


    // GET PRODUCT BY ID
    public Product getProductById(String id) {

        return productRepository.findById(id)
                .orElse(null);

    }


    // UPDATE PRODUCT
    public Product updateProduct(String id, Product updatedProduct) {

        return productRepository.findById(id)
                .map(product -> {

                    product.setProductId(updatedProduct.getProductId());
                    product.setName(updatedProduct.getName());
                    product.setCategory(updatedProduct.getCategory());
                    product.setDescription(updatedProduct.getDescription());
                    product.setPrice(updatedProduct.getPrice());
                    product.setQuantity(updatedProduct.getQuantity());

                    return productRepository.save(product);

                })
                .orElse(null);

    }


    // DELETE PRODUCT
    public void deleteProduct(String id) {

        productRepository.deleteById(id);

    }

}