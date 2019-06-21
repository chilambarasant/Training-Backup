package com.unisolve.uam.serviceimpl;

import static com.unisolve.uam.utility.Utility.getReportType;
import static com.unisolve.uam.utility.Utility.getStatusDescription;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.client.RestTemplate;

import com.unisolve.uam.DTO.UamDto;
import com.unisolve.uam.DTO.ResultDTO;
import com.unisolve.uam.DTO.ResultListDTO;
import com.unisolve.uam.model.UamModel;
import com.unisolve.uam.repository.UamRepository;
import com.unisolve.uam.service.UamService;
/**
 * @author sumilon.mondal
 *
 */
@Service
@Transactional
public class UamServiceImpl implements UamService {
	
	@Autowired
	private UamRepository viewRepository;

	@Override
	public ResultDTO getUserDetails(String email, String password) {
		List<UamModel> reportsDetailsList = viewRepository.getUserDetails(email,password);
		ResultDTO resultDTO = new ResultDTO();
		UamDto viewDTO = new UamDto();
		for (UamModel viewModel : reportsDetailsList) {
			viewDTO.setUserId(viewModel.getUserId());
			viewDTO.setUserName(viewModel.getUserName());
			viewDTO.setUserType(viewModel.getUserType());
			viewDTO.setMailId(viewModel.getMailId());
			viewDTO.setMobileNo(viewModel.getMobileNo());
		}
		resultDTO.setResults(viewDTO);
		System.out.println("resultDTO->"+resultDTO);
		return resultDTO;
	}
	
	
}
