package com.urbanfurniture.accounting.ledger;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;


@RestController
@RequestMapping("/api/ledger")
@RequiredArgsConstructor
public class LedgerController {

    private final LedgerService ledgerService;


    @GetMapping
    public List<?> getLedgerEntries() {
        return ledgerService.getLedgerEntries();
    }
}