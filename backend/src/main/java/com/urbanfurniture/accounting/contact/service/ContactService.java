package com.urbanfurniture.accounting.contact.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.contact.dto.ContactRequest;
import com.urbanfurniture.accounting.contact.dto.ContactResponse;
import com.urbanfurniture.accounting.contact.model.Contact;
import com.urbanfurniture.accounting.contact.repository.ContactRepository;

@Service
public class ContactService {

    private final ContactRepository contactRepository;

    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public ContactResponse createContact(ContactRequest request) {

        if (request.email() != null
                && !request.email().isBlank()
                && contactRepository.existsByEmail(request.email())) {

            throw new RuntimeException("Contact with this email already exists");
        }

        LocalDateTime now = LocalDateTime.now();

        Contact contact = Contact.builder()
                .name(request.name())
                .type(request.type())
                .email(request.email())
                .phone(request.phone())
                .address(request.address())
                .city(request.city())
                .state(request.state())
                .postalCode(request.postalCode())
                .taxNumber(request.taxNumber())
                .active(true)
                .createdAt(now)
                .updatedAt(now)
                .build();

        return toResponse(contactRepository.save(contact));
    }

    public List<ContactResponse> getAllContacts() {
        return contactRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ContactResponse getContactById(String id) {
        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        return toResponse(contact);
    }

    public List<ContactResponse> getCustomers() {
        return contactRepository.findByType(Contact.ContactType.CUSTOMER)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public List<ContactResponse> getVendors() {
        return contactRepository.findByType(Contact.ContactType.VENDOR)
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public ContactResponse updateContact(String id, ContactRequest request) {

        Contact existingContact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        existingContact.setName(request.name());
        existingContact.setType(request.type());
        existingContact.setEmail(request.email());
        existingContact.setPhone(request.phone());
        existingContact.setAddress(request.address());
        existingContact.setCity(request.city());
        existingContact.setState(request.state());
        existingContact.setPostalCode(request.postalCode());
        existingContact.setTaxNumber(request.taxNumber());
        existingContact.setUpdatedAt(LocalDateTime.now());

        return toResponse(contactRepository.save(existingContact));
    }

    public void deleteContact(String id) {

        Contact contact = contactRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Contact not found"));

        contactRepository.delete(contact);
    }

    private ContactResponse toResponse(Contact contact) {

        return new ContactResponse(
                contact.getId(),
                contact.getName(),
                contact.getType(),
                contact.getEmail(),
                contact.getPhone(),
                contact.getAddress(),
                contact.getCity(),
                contact.getState(),
                contact.getPostalCode(),
                contact.getTaxNumber(),
                contact.isActive(),
                contact.getCreatedAt(),
                contact.getUpdatedAt()
        );
    }
}