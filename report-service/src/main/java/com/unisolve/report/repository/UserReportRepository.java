package com.unisolve.report.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.unisolve.report.model.ReportDetails;;

@Repository
public interface UserReportRepository extends CrudRepository<ReportDetails, Long> {

}