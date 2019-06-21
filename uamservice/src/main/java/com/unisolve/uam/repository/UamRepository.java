package com.unisolve.uam.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.unisolve.uam.model.UamModel;

/**
 * @author Janakiram.E
 *
 */
public interface UamRepository extends JpaRepository<UamModel, Integer> {

	@Query(value="SELECT * from users where mail_id = ?1 and  password = ?2", nativeQuery = true)
	public List<UamModel> getUserDetails(String email, String password);
	
	
}
