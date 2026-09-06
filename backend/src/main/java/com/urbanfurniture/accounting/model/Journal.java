package com.urbanfurniture.accounting.model;
import java.time.LocalDateTime;

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

    private String reference;

    private String description;

    private LocalDateTime createdAt;
}