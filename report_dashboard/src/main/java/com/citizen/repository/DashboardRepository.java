package com.citizen.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

//import java.util.List;
//import java.util.Map;

//import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

//import com.citizen.entity.Dashboard;
import com.citizen.entity.ReportDetails;
import com.citizen.entity.ReportType;

public interface DashboardRepository extends CrudRepository<ReportDetails,Long>{
	
	/*@Query("select d from UserReport d")
	List<UserReport> getReports();*/

	@Query("SELECT distinct" +
	           "    new com.citizen.entity.ReportType(v.reportType as reportType,v.status as status, COUNT(v) as count) " +
	           "FROM " +
	           "    ReportDetails v " +
	           "GROUP BY " +
	           "    v.reportType,v.status")
	    List<ReportType> getReports();
	
	
	
}
