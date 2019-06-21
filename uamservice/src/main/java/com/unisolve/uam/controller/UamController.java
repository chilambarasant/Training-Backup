package com.unisolve.uam.controller;

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

import com.unisolve.uam.DTO.ResultDTO;
import com.unisolve.uam.DTO.ResultListDTO;
import com.unisolve.uam.service.UamService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

/**
 * @author janakiram.elamurugan
 *
 */
@RestController
@CrossOrigin("*")
@Api(value = "ReportsView-service", description = "All Operations for Ordering Commodity")
public class UamController {

	@Autowired
	private UamService viewService;

	@ApiOperation(value = "Get Reports List based on category")
	@GetMapping("/login")
	public ResponseEntity<ResultDTO> login(@RequestParam String email,@RequestParam String password) {
		return Optional.ofNullable(viewService.getUserDetails(email,password))
				.map(e -> new ResponseEntity<>(e, HttpStatus.OK))
				.orElseThrow(() -> new RuntimeException("Error while retrieving user details"));
	}

}
