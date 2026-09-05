package com.urbanfurniture.accounting.report.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.urbanfurniture.accounting.report.model.Report;
import com.urbanfurniture.accounting.report.service.ReportService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/reports")
@RequiredArgsConstructor
public class ReportController {

    private final ReportService reportService;


    @PostMapping
    public ResponseEntity<Report> create(
            @RequestBody Report report) {

        return ResponseEntity.ok(
                reportService.createReport(report)
        );
    }


    @GetMapping
    public ResponseEntity<List<Report>> getAll() {

        return ResponseEntity.ok(
                reportService.getAllReports()
        );
    }


    @GetMapping("/{id}")
    public ResponseEntity<Report> getById(
            @PathVariable String id) {

        return ResponseEntity.ok(
                reportService.getReportById(id)
        );
    }


    @PutMapping("/{id}")
    public ResponseEntity<Report> update(
            @PathVariable String id,
            @RequestBody Report report) {

        return ResponseEntity.ok(
                reportService.updateReport(id, report)
        );
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(
            @PathVariable String id) {

        reportService.deleteReport(id);

        return ResponseEntity.noContent().build();
    }
}