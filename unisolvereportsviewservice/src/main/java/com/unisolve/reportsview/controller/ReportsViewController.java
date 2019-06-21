package com.unisolve.reportsview.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.unisolve.reportsview.DTO.ResultDTO;
import com.unisolve.reportsview.DTO.ResultListDTO;
import com.unisolve.reportsview.service.ReportsViewService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * @author janakiram.elamurugan
 *
 */
@RestController
@CrossOrigin("*")
@Api(value = "ReportsView-service", description = "All Operations for Ordering Commodity")
public class ReportsViewController {

	@Autowired
	private ReportsViewService viewService;

	@ApiOperation(value = "Get Reports List based on category")
	@GetMapping("/get_reports_list")
	public ResponseEntity<ResultListDTO> getAllReports(@RequestParam(value="category", required = false)String category,
			@RequestParam(value="tab", required = false)Integer tab,@RequestParam(value="userId", required = false)String userId,@RequestParam(value="page", required = false)Integer page) {
		System.out.println("category ->"+category+"tab->"+tab+"userId->"+userId);
		return Optional.ofNullable(viewService.getAllReports(category,tab,userId,page))
				.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
				.orElseThrow(() -> new RuntimeException("Error in report details"));
	}
	
	@ApiOperation(value = "Get Reports Details based on ID")
	@GetMapping("/get_reports_details/{reportId}")
	public ResponseEntity<ResultDTO> getReportDetailsById(@PathVariable("reportId") int reportId) {
		System.out.println("report id ->"+reportId);
		return Optional.ofNullable(viewService.getReportById(reportId))
				.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
				.orElseThrow(() -> new RuntimeException("Error in report details"));
	}

}
