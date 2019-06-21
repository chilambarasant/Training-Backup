package com.unisolve.reportsview.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import io.swagger.annotations.ApiModelProperty;

/**
 * @author sumilon.mondal
 *
 */
@Entity
@Table(name = "report_details")
public class ReportsViewModel {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@ApiModelProperty(notes = "Reports Id - Auto Generated")
	private Integer id;

	@ApiModelProperty(notes = "User Id")
	@NotNull(message = "User Id cannot be empty")
	@Column(name = "user_id")
	private Integer userId;

	@ApiModelProperty(notes = "Report created Date")
	@NotNull(message = "Report created Date cannot be empty")
	@Column(name = "report_date")
	private Date reportCreatedDate;
	
	@ApiModelProperty(notes = "Report Modified Date")
	@Column(name = "modified_date")
	private Date reportModifiedDate;

	@ApiModelProperty(notes = "Comments for the issue")
	@Column
	private String comments;

	@ApiModelProperty(notes = "url of the posted image")
	@Column
	private String imageurl;

	@ApiModelProperty(notes = "reports description")
	@Column(name = "report_desc")
	private String reportDesc;
	
	@ApiModelProperty(notes = "report title")
	@Column(name = "report_title")
	private String reportTitle;
	
	@ApiModelProperty(notes = "report type")
	@Column(name = "report_type")
	private String reportType;

	@ApiModelProperty(notes = "status of the issue")
	private String status;
	
	
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

	public Date getReportCreatedDate() {
		return reportCreatedDate;
	}

	public void setReportCreatedDate(Date reportCreatedDate) {
		this.reportCreatedDate = reportCreatedDate;
	}

	public Date getReportModifiedDate() {
		return reportModifiedDate;
	}

	public void setReportModifiedDate(Date reportModifiedDate) {
		this.reportModifiedDate = reportModifiedDate;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public String getImageurl() {
		return imageurl;
	}

	public void setImageurl(String imageurl) {
		this.imageurl = imageurl;
	}

	public String getReportDesc() {
		return reportDesc;
	}

	public void setReportDesc(String reportDesc) {
		this.reportDesc = reportDesc;
	}

	public String getReportTitle() {
		return reportTitle;
	}

	public void setReportTitle(String reportTitle) {
		this.reportTitle = reportTitle;
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
	
	
	@Override
	public String toString() {
		return "OrderDetails [id=" + id + ", userId=" + userId + ", reportCreatedDate=" + reportCreatedDate + ", reportModifiedDate="
				+ reportModifiedDate + ", comments=" + comments + ", imageurl=" + imageurl + ", reportDesc="
				+ reportDesc + ", reportTitle=" + reportTitle + ", reportType=" + reportType + ", status=" + status + "]";
	}

}
