package com.unisolve.report.serviceimpl;

import static com.unisolve.report.utility.Utility.getCurrentDateFormat;
import static com.unisolve.report.utility.Utility.getStatusDescription;
import static com.unisolve.report.utility.Utility.getReportType;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unisolve.report.DTO.ReportDetailsDTO;
import com.unisolve.report.model.ReportDetails;
import com.unisolve.report.repository.UserReportRepository;
import com.unisolve.report.service.ReportService;

@Service
public class ReportDetailsImpl implements ReportService {

	
	@Autowired
    private  UserReportRepository userReportRepo;
	
	@Autowired
	ReportDetailsDTO reportDetailsDTO;
	
	@Override
	public ReportDetailsDTO saveReportDetails(ReportDetails reportDetails) throws Exception {
		// TODO Auto-generated method stub
		
		try
		{
			userReportRepo.save(reportDetails);
			reportDetailsDTO.setResponseMsg("Report posted Successfully");
			
		}
		catch(Exception e)
		{
			reportDetailsDTO.setResponseMsg("Report Failure to Post");
		}
		
		return reportDetailsDTO;
	}

	@Override
	public List<ReportDetailsDTO> getReportByUserId() {
		
		String imageUrl = "http://localhost:8082/reportImg/";
		
		List<ReportDetailsDTO> reportDTO = new ArrayList();
		DateFormat outputFormat = new SimpleDateFormat("dd-MM-yyyy HH:mm:ss");
		
		 Iterable<ReportDetails> retriveModel = userReportRepo.findAll();
         for (ReportDetails reportDetails : retriveModel) {
    	  ReportDetailsDTO dto = new ReportDetailsDTO();
    	  dto.setReportTitle(reportDetails.getReportTitle());
    	  dto.setReportType(getReportType(reportDetails.getReportType()));
    	  dto.setReportDesc(reportDetails.getReportDesc());
    	  dto.setReportDate(outputFormat.format(reportDetails.getReportDate()));
    	  dto.setImageURL(imageUrl+reportDetails.getImageURL());
    	  dto.setComments(reportDetails.getComments());
    	  dto.setStatus(getStatusDescription(reportDetails.getStatus()));
    	  dto.setUser_id(reportDetails.getUser_id());
    	  dto.setId(reportDetails.getId());
    	  dto.setMobileNo(reportDetails.getMobileNo());
    	  dto.setUserName(reportDetails.getUserName());
    	  reportDTO.add(dto);
	      }
		
		return reportDTO;
	
	}

	@Override
	public ReportDetailsDTO updateReportStatusById(ReportDetails reportDetails,Long id) {
	  ReportDetailsDTO dto = new ReportDetailsDTO();

		try {
		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss");
		String dateString = format.format(new Date());
		Date   currentDate = format.parse(dateString);    
		userReportRepo.findById(id).map(value -> {
			value.setComments(reportDetails.getComments());
			value.setStatus(reportDetails.getStatus());
			value.setModifiedDate(currentDate);
			dto.setStatus(getStatusDescription(reportDetails.getStatus()));
			dto.setResponseMsg("Successfully Updated");
			return userReportRepo.save(value);
		});
		
		}
		catch(Exception e)
		{
			System.out.println();
		}
		
		return dto;
		
	}
}

