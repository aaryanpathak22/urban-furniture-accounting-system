package com.urbanfurniture.accounting.model;


import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection = "accounts")
public class Account {


    @Id
    private String id;


    private String code;

    private String name;

    private String type;

    private String description;

    private String parentAccountId;

    private boolean active;



    public Account() {
    }



    public String getId() {
        return id;
    }


    public void setId(String id) {
        this.id = id;
    }



    public String getCode() {
        return code;
    }


    public void setCode(String code) {
        this.code = code;
    }



    public String getName() {
        return name;
    }


    public void setName(String name) {
        this.name = name;
    }



    public String getType() {
        return type;
    }


    public void setType(String type) {
        this.type = type;
    }



    public String getDescription() {
        return description;
    }


    public void setDescription(String description) {
        this.description = description;
    }



    public String getParentAccountId() {
        return parentAccountId;
    }


    public void setParentAccountId(String parentAccountId) {
        this.parentAccountId = parentAccountId;
    }



    public boolean isActive() {
        return active;
    }


    public void setActive(boolean active) {
        this.active = active;
    }

}