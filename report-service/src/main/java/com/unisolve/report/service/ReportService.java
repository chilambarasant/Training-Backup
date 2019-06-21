package com.unisolve.report.service;


import java.util.List;

import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import com.unisolve.report.DTO.ReportDetailsDTO;
import com.unisolve.report.model.ReportDetails;
@Service
public interface ReportService {
	
	/**
	 * @param order
	 * @return Success / Failure
	 * @throws PricingNotFound
	 */
	public ReportDetailsDTO saveReportDetails(ReportDetails report) throws Exception;
	
	public List<ReportDetailsDTO> getReportByUserId();
	
	public ReportDetailsDTO updateReportStatusById(ReportDetails reportDetails,Long id);

}
