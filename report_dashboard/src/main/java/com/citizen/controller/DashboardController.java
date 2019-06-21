package com.citizen.controller;


import java.util.Collection;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.citizen.entity.ReportResponse;
import com.citizen.entity.ReportType;
import com.citizen.repository.DashboardRepository;

@RestController
public class DashboardController {

	@Autowired
	private DashboardRepository dashboardRepository;

	@RequestMapping(value = "/api/report", method = { RequestMethod.GET, RequestMethod.POST }) // to support get and
																								// post http header
	public Collection getreport() {

		System.out.println("*************test dashboard*****************************");

		Map<String, Map<String, Long>> response = new HashMap<String, Map<String, Long>>();

		List<ReportType> list = dashboardRepository.getReports();

		
		// type, value is open issues count
		Map<String, Long> open = list.stream()
				.collect(Collectors.groupingBy(ReportType::getReportType, Collectors.summingLong(ReportType::getOpen)));

		Map<String, Long> close = list.stream().collect(
				Collectors.groupingBy(ReportType::getReportType, Collectors.summingLong(ReportType::getClose)));
		
		Map<String, Long> inProgress = list.stream().collect(
				Collectors.groupingBy(ReportType::getReportType, Collectors.summingLong(ReportType::getInProgress)));

		Map<String, Long> rejected = list.stream().collect(
				Collectors.groupingBy(ReportType::getReportType, Collectors.summingLong(ReportType::getRejected)));

		Map<String, ReportResponse> reportMap = new HashMap<String, ReportResponse>();
		for (String key : open.keySet()) {

			ReportResponse report = reportMap.get(key);
			if (report == null) {
				report = new ReportResponse();

			}
			report.setOpenIssues(open.get(key));
			report.setReportType(key);
			reportMap.put(key, report);
		}
		for (String key : close.keySet()) {
			ReportResponse report = reportMap.get(key);
			if (report == null) {
				report = new ReportResponse();
			}
			report.setClosedIssues(close.get(key));
			report.setReportType(key);
			reportMap.put(key, report);
		}
		for (String key : inProgress.keySet()) {

			ReportResponse report = reportMap.get(key);
			if (report == null) {
				report = new ReportResponse();

			}
			report.setInProgressIssues(inProgress.get(key));
			report.setReportType(key);
			reportMap.put(key, report);
		}
		for (String key : rejected.keySet()) {

			ReportResponse report = reportMap.get(key);
			if (report == null) {
				report = new ReportResponse();

			}
			report.setRejectedIssues(rejected.get(key));
			report.setReportType(key);
			reportMap.put(key, report);
		}


		return reportMap.values();

		/*
		 * ReportType dto = new ReportType();
		 * 
		 * Map<String, List<ReportType>> response = new HashMap<String,
		 * List<ReportType>>();
		 * 
		 * //dto.setList(dashboardRepository.getReports()); //response.put("reports",
		 * dto.getList());
		 * 
		 * 
		 * 
		 * List<ReportType> list = dashboardRepository.getReports(); List<ReportType>
		 * listnew = new ArrayList<ReportType>();
		 * 
		 * ReportType dtonew = new ReportType();
		 * 
		 * 
		 * 
		 * 
		 * long opencount = 0; long closecount = 0;
		 * 
		 * for(int i=0;i<list.size();i++) { dto = (ReportType) list.get(i);
		 * 
		 * if(dto.getReportType().equals("roads")) {
		 * 
		 * 
		 * if(dto.getStatus().equals("open")) { opencount = opencount+dto.getCount();
		 * //dtonew.setOpen(opencount); }else { closecount = closecount+dto.getCount();
		 * //dtonew.setClose(closecount); }
		 * 
		 * //dtonew.setReportType("Roads");
		 * 
		 * } else if(dto.getReportType().equals("garbage dumping")) {
		 * 
		 * 
		 * if(dto.getStatus().equals("open")) { opencount = opencount+dto.getCount();
		 * //dtonew.setOpen(opencount); }else { closecount = closecount+dto.getCount();
		 * //dtonew.setClose(closecount); } //dtonew.setReportType("Garbage Dumping");
		 * 
		 * }
		 * 
		 * dtonew.setOpen(opencount); dtonew.setClose(closecount);
		 * dtonew.setReportType(dto.getReportType());
		 * 
		 * listnew.add(dtonew);
		 * 
		 * 
		 * }
		 * 
		 * System.out.println("size of array-->"+listnew.size());
		 * 
		 * response.put("reports", list);
		 * 
		 * return response;
		 */

	}

	/*
	 * @RequestMapping(value = "/api/report", method= {RequestMethod.GET,
	 * RequestMethod.POST}) //to support get and post http header public Map<String,
	 * List<UserReport>> getreport() {
	 * 
	 * System.out.println("*************test dashboard*****************************"
	 * );
	 * 
	 * Map<String, List<UserReport>> response = new HashMap<String,
	 * List<UserReport>>();
	 * 
	 * 
	 * List<UserReport> list = dashboardRepository.getReports();
	 * 
	 * response.put("reports", list); return response;
	 */

}
