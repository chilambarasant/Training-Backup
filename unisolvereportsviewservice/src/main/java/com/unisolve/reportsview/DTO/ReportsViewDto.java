package com.unisolve.reportsview.DTO;

import java.text.DateFormat;
import java.util.Date;

/**
 * @author sumilon.mondal
 *
 */
public class ReportsViewDto {

	private Integer id;
	private Integer userId;
	private String reportTitle;
	private String reportDesc;
	private String reportType;
	private String status;
	private String comments;
	private String imageUrl;
	private String reportCreatedDate;
	private Date reportModifiedDate;
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getReportTitle() {
		return reportTitle;
	}

	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
	}

	public String getReportDesc() {
		return reportDesc;
	}

	public void setReportDesc(String reportDesc) {
		this.reportDesc = reportDesc;
	}

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getReportCreatedDate() {
		return reportCreatedDate;
	}

	public void setReportCreatedDate(Date reportCreatedDate) {
		String DateToStr = DateFormat.getDateInstance().format(reportCreatedDate);
		this.reportCreatedDate = DateToStr;
	}

	public Date getReportModifiedDate() {
		return reportModifiedDate;
	}

	public void setReportModifiedDate(Date reportModifiedDate) {
		this.reportModifiedDate = reportModifiedDate;
	}

}
