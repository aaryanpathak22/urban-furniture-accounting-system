package com.urbanfurniture.accounting.settings.model;


import java.util.Map;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;


@Data
@Document(collection = "settings")
public class Setting {


    @Id
    private String id;


    private String settingId;


    private String settingType;


    private String key;


    private Map<String,Object> value;


    private String status;


    private String updatedAt;

}