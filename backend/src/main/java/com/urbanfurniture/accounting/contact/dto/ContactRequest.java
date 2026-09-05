package com.urbanfurniture.accounting.contact.dto;

import com.urbanfurniture.accounting.contact.model.Contact;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record ContactRequest(

        @NotBlank(message = "Name is required")
        String name,

        @NotNull(message = "Contact type is required")
        Contact.ContactType type,

        @Email(message = "Invalid email format")
        String email,

        String phone,

        String address,

        String city,

        String state,

        String postalCode,

        String taxNumber
) {
}