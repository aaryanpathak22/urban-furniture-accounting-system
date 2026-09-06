package com.urbanfurniture.accounting.settings.repository;


import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.settings.model.Setting;


public interface SettingRepository 
        extends MongoRepository<Setting,String> {


}