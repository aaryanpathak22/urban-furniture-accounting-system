package com.urbanfurniture.accounting.product.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.product.dto.ProductRequest;
import com.urbanfurniture.accounting.product.dto.ProductResponse;
import com.urbanfurniture.accounting.product.model.Product;
import com.urbanfurniture.accounting.product.repository.ProductRepository;

@Service
public class ProductService {

    private final ProductRepository productRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    public ProductResponse createProduct(ProductRequest request) {

        if (productRepository.existsBySku(request.sku())) {
            throw new RuntimeException("Product with this SKU already exists");
        }

        LocalDateTime now = LocalDateTime.now();

        Product product = Product.builder()
                .name(request.name())
                .sku(request.sku())
                .description(request.description())
                .category(request.category())
                .unitPrice(request.unitPrice())
                .costPrice(request.costPrice())
                .taxRate(request.taxRate())
                .stockQuantity(request.stockQuantity())
                .active(true)
                .createdAt(now)
                .updatedAt(now)
                .build();

        return toResponse(productRepository.save(product));
    }

    public List<ProductResponse> getAllProducts() {
        return productRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ProductResponse getProductById(String id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        return toResponse(product);
    }

    public ProductResponse updateProduct(String id, ProductRequest request) {

        Product existingProduct = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (!existingProduct.getSku().equals(request.sku())
                && productRepository.existsBySku(request.sku())) {
            throw new RuntimeException("Product with this SKU already exists");
        }

        existingProduct.setName(request.name());
        existingProduct.setSku(request.sku());
        existingProduct.setDescription(request.description());
        existingProduct.setCategory(request.category());
        existingProduct.setUnitPrice(request.unitPrice());
        existingProduct.setCostPrice(request.costPrice());
        existingProduct.setTaxRate(request.taxRate());
        existingProduct.setStockQuantity(request.stockQuantity());
        existingProduct.setUpdatedAt(LocalDateTime.now());

        return toResponse(productRepository.save(existingProduct));
    }

    public void deleteProduct(String id) {

        Product product = productRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Product not found"));

        productRepository.delete(product);
    }

    private ProductResponse toResponse(Product product) {

        return new ProductResponse(
                product.getId(),
                product.getName(),
                product.getSku(),
                product.getDescription(),
                product.getCategory(),
                product.getUnitPrice(),
                product.getCostPrice(),
                product.getTaxRate(),
                product.getStockQuantity(),
                product.isActive(),
                product.getCreatedAt(),
                product.getUpdatedAt()
        );
    }
}