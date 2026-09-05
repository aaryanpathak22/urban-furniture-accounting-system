package com.urbanfurniture.accounting.report.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.urbanfurniture.accounting.report.model.Report;
import com.urbanfurniture.accounting.report.repository.ReportRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ReportService {

    private final ReportRepository reportRepository;


    public Report createReport(Report report) {

        if (report.getGeneratedDate() == null) {
            report.setGeneratedDate(LocalDate.now());
        }

        return reportRepository.save(report);
    }


    public List<Report> getAllReports() {

        return reportRepository.findAll();
    }


    public Report getReportById(String id) {

        return reportRepository.findById(id)
                .orElseThrow(
                        () -> new RuntimeException("Report not found")
                );
    }


    public Report updateReport(
            String id,
            Report updatedReport) {

        Report existing = getReportById(id);

        existing.setReportName(updatedReport.getReportName());
        existing.setReportType(updatedReport.getReportType());
        existing.setGeneratedDate(updatedReport.getGeneratedDate());
        existing.setGeneratedBy(updatedReport.getGeneratedBy());
        existing.setContent(updatedReport.getContent());

        return reportRepository.save(existing);
    }


    public void deleteReport(String id) {

        reportRepository.deleteById(id);
    }
}