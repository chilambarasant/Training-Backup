package com.unisolve.uam.utility;

import java.util.Date;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Configuration

public class Utility {
	
	public static String getStatusDescription(String status)
	{
		String statusDesc = "";
		
		if(status.equalsIgnoreCase("OP"))
		{
			statusDesc = "Open";
		}
		else if(status.equalsIgnoreCase("IP"))
		{
			statusDesc = "Inprogress";
		}
		else if(status.equalsIgnoreCase("RS"))
		{
			statusDesc = "Resolved";
		}
		else if(status.equalsIgnoreCase("RJ"))
		{
			statusDesc = "Rejected";
		}
		return statusDesc;
	}
	
	public static String getReportType(String reportType)
	{
		String typeDesc = "";
		
		if(reportType.equalsIgnoreCase("MR"))
		{
			typeDesc = "Meeting Room";
		}
		else if(reportType.equalsIgnoreCase("CF"))
		{
			typeDesc = "Cafeteria";
		}
		else if(reportType.equalsIgnoreCase("GP"))
		{
			typeDesc = "Gym/Play Area";
		}
		else if(reportType.equalsIgnoreCase("RT"))
		{
			typeDesc = "Restroom";
		}
		else if(reportType.equalsIgnoreCase("OT"))
		{
			typeDesc = "Others";
		}
		return typeDesc;
	}
	

}
