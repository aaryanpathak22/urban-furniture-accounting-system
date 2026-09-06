package com.urbanfurniture.accounting.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.model.Account;


public interface AccountRepository 
        extends MongoRepository<Account,String> {


}