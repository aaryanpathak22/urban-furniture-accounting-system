package com.urbanfurniture.accounting.contact.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.contact.model.Contact;

public interface ContactRepository extends MongoRepository<Contact, String> {

    List<Contact> findByType(Contact.ContactType type);

    boolean existsByEmail(String email);
}