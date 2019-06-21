package com.citizen.entity;


public class ReportType {
	
	private String reportType;
	private String status;
	private long count;
	private long open;
	private long close;
	private long inProgress;
	private long rejected;
	 
	
	public ReportType(String reportType, String status, long count) {
		super();
		this.reportType = reportType;
		this.status = status;
		this.count = count;
	
	}
	public ReportType() {
		// TODO Auto-generated constructor stub
	}
	public String getReportType() {
		long opencount = 0;
		long closecount = 0;
		long inProgresscount = 0;
		long rejetedcount = 0;
		
		if(status.equals("OP")) {
			this.open = opencount+this.count;
			
		}else if(status.equals("RS"))
		{
			this.close = closecount+this.count;
		}
		else if(status.equals("IP"))
		{
			this.inProgress = inProgresscount+this.count;
		}
		else if(status.equals("RJ"))
		{
			this.rejected = rejetedcount+this.count;
		}
		
		if(reportType.equals("MR")) {
			this.reportType = "Meeting Room";
			
		}else if(reportType.equals("CF"))
		{
			this.reportType = "Cafeteria";
		}
		else if(reportType.equals("GP"))
		{
			this.reportType = "Gym/Play Area";
		}
		else if(reportType.equals("RT"))
		{
			this.reportType = "Restroom";
		}
		else if(reportType.equals("OT"))
		{
			this.reportType = "Others";
		}
		
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
	public long getCount() {
		return count;
	}
	public void setCount(long count) {
		this.count = count;
	}
	public long getOpen() {
		return open;
	}
	public void setOpen(long open) {
		this.open = open;
	}
	public long getClose() {
		return close;
	}
	public void setClose(long close) {
		this.close = close;
	}
	public long getInProgress() {
		return inProgress;
	}
	public void setInProgress(long inProgress) {
		this.inProgress = inProgress;
	}
	public long getRejected() {
		return rejected;
	}
	public void setRejected(long rejected) {
		this.rejected = rejected;
	}
		
	

	
	
	
	

}
