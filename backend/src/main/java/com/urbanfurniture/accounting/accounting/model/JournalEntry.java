package com.urbanfurniture.accounting.accounting.model;

import java.time.LocalDate;
import java.util.List;

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
@Document(collection = "journal_entries")
public class JournalEntry {

    @Id
    private String id;

    private String entryNumber;

    private String journalId;

    private LocalDate entryDate;

    private String reference;

    private String description;

    private List<JournalEntryLine> lines;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class JournalEntryLine {

        private String accountId;

        private double debit;

        private double credit;

        private String description;
    }
}