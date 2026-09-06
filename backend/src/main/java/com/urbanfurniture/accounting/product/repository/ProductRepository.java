package com.urbanfurniture.accounting.product.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.product.model.Product;


public interface ProductRepository extends MongoRepository<Product,String> {

}