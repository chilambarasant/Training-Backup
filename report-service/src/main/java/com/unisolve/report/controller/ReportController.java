package com.unisolve.report.controller;


import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.transaction.Transactional;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.unisolve.report.DTO.ReportDetailsDTO;
import com.unisolve.report.model.ReportDetails;
import com.unisolve.report.repository.UserReportRepository;
import com.unisolve.report.service.ReportService;
import static com.unisolve.report.utility.Utility.getCurrentDateFormat;
import static com.unisolve.report.utility.Utility.sendMail;
import static com.unisolve.report.utility.Utility.saveUploadImage;

@RestController
@PropertySource("classpath:citizen.properties")
public class ReportController {

	@Autowired
	private UserReportRepository userReportRepo;

	@Autowired
	private ReportDetailsDTO reportDetailsDTO;

	@Autowired
	private ReportService reportService;

	private ReportDetails reportDetails;
	
	 
	@Value("${imageRetieveURL}")
	public String imageRetieveURL;

	@Value("${imageUploadPath}")
	public static String UPLOAD_PATH;
	
	
	/**
	 * @param order
	 * @return Success/Failure
	 * @throws Exception
	 * @throws PricingNotFound
	 */
	@PostMapping("/save_report_details")
	public ResponseEntity<ReportDetailsDTO> addReportDetails(@RequestParam("file") MultipartFile file,
			@RequestParam("reportTitle") String reportTitle, @RequestParam("reportType") String reportType,
			@RequestParam("reportDesc") String reportDesc,@RequestParam("userName") String userName,@RequestParam("mobileNo") String mobileNo) throws Exception {

		List<String> list = new ArrayList<>();
		list.add(reportTitle);
		list.add(reportType);
		list.add(reportDesc);
		String imageUrl = saveUploadImage(file,reportTitle,reportType,reportDesc);
		reportDetails = new ReportDetails();
		reportDetails.setReportTitle(reportTitle);
		reportDetails.setReportType(reportType);
		reportDetails.setReportDesc(reportDesc);
		reportDetails.setReportDate(getCurrentDateFormat());
		reportDetails.setUser_id(1993);
		reportDetails.setImageURL(imageUrl);
		reportDetails.setUserName(userName);
		reportDetails.setMobileNo(mobileNo);
		reportDetails.setComments("Action has been taken soon");
		reportDetails.setStatus("OP");
		
		String mailResponse = sendMail(list);
		return Optional.ofNullable(reportService.saveReportDetails(reportDetails))
				.map(e -> new ResponseEntity<>(e, HttpStatus.CREATED))
				.orElseThrow(() -> new RuntimeException("Report creation failed"));
	}
	
	
	List<ReportDetailsDTO> userReport ;
	@CrossOrigin
	@GetMapping("/get_report_details")
	private ResponseEntity<List<ReportDetailsDTO>> getReportDetails() {
		System.out.println("welcome>>>>>>>>>");
		return Optional.ofNullable(reportService.getReportByUserId())
				.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
				.orElseThrow(() -> new RuntimeException("Error in order details"));
	  }
	
	
	@CrossOrigin
	@PutMapping("/update_report_details/{id}")
	private ResponseEntity<ReportDetailsDTO> updateReportDetails(@RequestBody ReportDetails reportDetails,@PathVariable("id") Long id) {
		
		return Optional.ofNullable(reportService.updateReportStatusById(reportDetails,id))
				.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
				.orElseThrow(() -> new RuntimeException("Error in order details"));
}
}
