package com.urbanfurniture.accounting.journal.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.journal.model.Journal;
import com.urbanfurniture.accounting.journal.service.JournalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/journals")
@RequiredArgsConstructor
public class JournalController {

    private final JournalService journalService;


    @PostMapping
    public ResponseEntity<Journal> create(
            @RequestBody Journal journal) {

        return ResponseEntity.ok(
                journalService.createJournal(journal)
        );
    }


    @GetMapping
    public ResponseEntity<List<Journal>> getAll() {

        return ResponseEntity.ok(
                journalService.getAllJournals()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Journal> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                journalService.getJournalById(id)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        journalService.deleteJournal(id);

        return ResponseEntity.noContent().build();
    }
}