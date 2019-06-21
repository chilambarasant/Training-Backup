package com.unisolve.report.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

/**
 * @author Chilambarasan.T
 *
 */

@Entity
public class ReportDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NotNull(message = "Report title cannot be empty")
	private String reportTitle;

	@NotNull(message = "Report Description cannot be empty")
	private String reportDesc;

	@NotNull(message = "Report Type cannot be empty")
	private String reportType;

	@NotNull(message = "Report Image cannot be empty")
	private String imageURL;

	@NotNull(message = "User Id cannot be empty")
	private int user_id;

	@NotNull(message = "Report Date cannot be empty")
	private Date reportDate;

	private Date modifiedDate;

	private String comments;

	private String status;
	
	private String userName;
	
	private String mobileNo;

	public long getId() {
		return id;
	}

	public ReportDetails setId(long id) {
		this.id = id;
		return this;
	}

	public String getReportTitle() {
		return reportTitle;
	}

	public ReportDetails setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
		return this;
	}

	public String getReportDesc() {
		return reportDesc;
	}

	public ReportDetails setReportDesc(String reportDesc) {
		this.reportDesc = reportDesc;
		return this;
	}

	public String getReportType() {
		return reportType;
	}

	public ReportDetails setReportType(String reportType) {
		this.reportType = reportType;
		return this;
	}

	public String getImageURL() {
		return imageURL;
	}

	public ReportDetails setImageURL(String imageURL) {
		this.imageURL = imageURL;
		return this;
	}

	public int getUser_id() {
		return user_id;
	}

	public ReportDetails setUser_id(int user_id) {
		this.user_id = user_id;
		return this;
	}

	public Date getReportDate() {
		return reportDate;
	}

	public ReportDetails setReportDate(Date reportDate) {
		this.reportDate = reportDate;
		return this;
	}

	public Date getModifiedDate() {
		return modifiedDate;
	}

	public ReportDetails setModifiedDate(Date modifiedDate) {
		this.modifiedDate = modifiedDate;
		return this;
	}

	public String getComments() {
		return comments;
	}

	public ReportDetails setComments(String comments) {
		this.comments = comments;
		return this;
	}

	public String getStatus() {
		return status;
	}

	public ReportDetails setStatus(String status) {
		this.status = status;
		return this;
	}

	
	public String getUserName() {
		return userName;
	}

	public ReportDetails setUserName(String userName) {
		this.userName = userName;
		return this;
	}

	public String getMobileNo() {
		return mobileNo;
	}

	public ReportDetails setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
		return this;
	}

	@Override
	public String toString() {
		return "ReportDetails [id=" + id + ", reportTitle=" + reportTitle + ", reportDesc=" + reportDesc
				+ ", reportType=" + reportType + ", imageURL=" + imageURL + ", user_id=" + user_id + ", reportDate="
				+ reportDate + ", modifiedDate=" + modifiedDate + ", comments=" + comments + ", status=" + status + "]";
	}

}
