package com.unisolve.uam.service;

import com.unisolve.uam.DTO.ResultDTO;
import com.unisolve.uam.DTO.ResultListDTO;

/**
 * @author Janakiram.ela
 *
 */
public interface UamService {
	
	public ResultDTO getUserDetails(String email,String password);
	
}
