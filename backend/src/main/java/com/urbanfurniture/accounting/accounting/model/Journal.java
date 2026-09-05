package com.urbanfurniture.accounting.accounting.model;

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

    private String name;

    private String code;

    private JournalType type;

    private String description;

    private boolean active;

    public enum JournalType {
        SALES,
        PURCHASE,
        CASH,
        BANK,
        GENERAL
    }
}