package com.urbanfurniture.accounting.settings.controller;


import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.settings.model.Setting;
import com.urbanfurniture.accounting.settings.service.SettingService;



@RestController
@RequestMapping("/api/settings")
@CrossOrigin(origins="http://localhost:5173")
public class SettingController {



    private final SettingService service;



    public SettingController(
            SettingService service
    ){

        this.service = service;

    }




    @GetMapping
    public List<Setting> getSettings(){

        return service.getSettings();

    }


}