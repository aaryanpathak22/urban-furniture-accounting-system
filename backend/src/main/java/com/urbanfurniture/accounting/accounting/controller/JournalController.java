package com.urbanfurniture.accounting.accounting.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.accounting.dto.JournalRequest;
import com.urbanfurniture.accounting.accounting.dto.JournalResponse;
import com.urbanfurniture.accounting.accounting.service.JournalService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/journals")
@CrossOrigin(origins = "http://localhost:5173")
public class JournalController {

    private final JournalService journalService;

    public JournalController(JournalService journalService) {
        this.journalService = journalService;
    }


    @PostMapping
    public ResponseEntity<JournalResponse> createJournal(
            @Valid @RequestBody JournalRequest request) {

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(journalService.createJournal(request));
    }


    @GetMapping
    public ResponseEntity<List<JournalResponse>> getAllJournals() {

        return ResponseEntity.ok(
                journalService.getAllJournals()
        );
    }
}