package com.urbanfurniture.accounting.contact.dto;

import java.time.LocalDateTime;

import com.urbanfurniture.accounting.contact.model.Contact;

public record ContactResponse(
        String id,
        String name,
        Contact.ContactType type,
        String email,
        String phone,
        String address,
        String city,
        String state,
        String postalCode,
        String taxNumber,
        boolean active,
        LocalDateTime createdAt,
        LocalDateTime updatedAt
) {
}