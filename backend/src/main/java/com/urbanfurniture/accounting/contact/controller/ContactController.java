package com.urbanfurniture.accounting.contact.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.contact.dto.ContactRequest;
import com.urbanfurniture.accounting.contact.dto.ContactResponse;
import com.urbanfurniture.accounting.contact.service.ContactService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/contacts")
@CrossOrigin(origins = "http://localhost:5173")
public class ContactController {

    private final ContactService contactService;

    public ContactController(ContactService contactService) {
        this.contactService = contactService;
    }

    @PostMapping
    public ResponseEntity<ContactResponse> createContact(
            @Valid @RequestBody ContactRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(contactService.createContact(request));
    }

    @GetMapping
    public ResponseEntity<List<ContactResponse>> getAllContacts() {
        return ResponseEntity.ok(contactService.getAllContacts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactResponse> getContactById(
            @PathVariable String id) {

        return ResponseEntity.ok(contactService.getContactById(id));
    }

    @GetMapping("/customers")
    public ResponseEntity<List<ContactResponse>> getCustomers() {
        return ResponseEntity.ok(contactService.getCustomers());
    }

    @GetMapping("/vendors")
    public ResponseEntity<List<ContactResponse>> getVendors() {
        return ResponseEntity.ok(contactService.getVendors());
    }

    @PutMapping("/{id}")
    public ResponseEntity<ContactResponse> updateContact(
            @PathVariable String id,
            @Valid @RequestBody ContactRequest request) {

        return ResponseEntity.ok(
                contactService.updateContact(id, request)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteContact(
            @PathVariable String id) {

        contactService.deleteContact(id);
        return ResponseEntity.noContent().build();
    }
}