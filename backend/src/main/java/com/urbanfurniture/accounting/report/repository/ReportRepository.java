package com.urbanfurniture.accounting.report.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.urbanfurniture.accounting.report.model.Report;

public interface ReportRepository extends MongoRepository<Report, String> {

}