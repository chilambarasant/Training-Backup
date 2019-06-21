package com.citizen.entity;

public class ReportResponse {

	private String reportType;
	private long openIssues;
	private long closedIssues;
	private long inProgressIssues;
	private long rejectedIssues;

	public String getReportType() {
		return reportType;
	}

	public void setReportType(String reportType) {
		this.reportType = reportType;
	}

	public long getOpenIssues() {
		return openIssues;
	}

	public void setOpenIssues(long openIssues) {
		this.openIssues = openIssues;
	}

	public long getClosedIssues() {
		return closedIssues;
	}

	public void setClosedIssues(long closedIssues) {
		this.closedIssues = closedIssues;
	}

	public long getInProgressIssues() {
		return inProgressIssues;
	}

	public void setInProgressIssues(long inProgressIssues) {
		this.inProgressIssues = inProgressIssues;
	}

	public long getRejectedIssues() {
		return rejectedIssues;
	}

	public void setRejectedIssues(long rejectedIssues) {
		this.rejectedIssues = rejectedIssues;
	}
	
	
	
	
	
	
}
