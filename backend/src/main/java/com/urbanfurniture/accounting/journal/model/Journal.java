package com.urbanfurniture.accounting.journal.model;

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
@Document(collection = "journals")
public class Journal {

    @Id
    private String id;

    private String journalNumber;

    private LocalDate journalDate;

    private String referenceType;

    private String referenceId;

    private String description;

    private List<JournalLine> lines;

    private double totalDebit;

    private double totalCredit;


    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class JournalLine {

        private String account;

        private String accountType;

        private double debit;

        private double credit;
    }
}