package com.urbanfurniture.accounting.contact.model;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "contacts")
public class Contact {

    @Id
    private String id;

    private String name;

    private ContactType type;

    private String email;

    private String phone;

    private String address;

    private String city;

    private String state;

    private String postalCode;

    private String taxNumber;

    private boolean active;

    private LocalDateTime createdAt;

    private LocalDateTime updatedAt;

    public enum ContactType {
        CUSTOMER,
        VENDOR,
        BOTH
    }
}