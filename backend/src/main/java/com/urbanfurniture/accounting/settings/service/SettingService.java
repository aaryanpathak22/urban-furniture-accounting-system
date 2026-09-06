package com.urbanfurniture.accounting.settings.service;


import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.settings.model.Setting;
import com.urbanfurniture.accounting.settings.repository.SettingRepository;


@Service
public class SettingService {


    private final SettingRepository repository;


    public SettingService(
            SettingRepository repository
    ){

        this.repository = repository;

    }



    public List<Setting> getSettings(){

        return repository.findAll();

    }


}