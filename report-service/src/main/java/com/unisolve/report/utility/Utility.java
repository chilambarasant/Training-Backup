package com.unisolve.report.utility;

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
@PropertySource("classpath:citizen.properties")

public class Utility {
	
	@Autowired
    private static  JavaMailSender sender;
    
//	@Value("${adminMailID}")
	public static String adminMailID = "simbu0206@gmail.com";
	
	
	public static String UPLOAD_PATH = "./src/main/resources/static/reportImg/";

   	public static String sendMail(List<String> list) {
   		String responseMsg = "";
   		System.out.println("size >>>>>>." + list.size());
		 try {
      
        if(null != list && list.size() > 0)
        {
        	System.out.println("into loop >>>>>>." + list.size());
        	  MimeMessage message = sender.createMimeMessage();
              MimeMessageHelper helper = new MimeMessageHelper(message);
            helper.setTo(adminMailID);
            helper.setText("Dear Admin : Welcome to Citizen World)");
            helper.setSubject("Alert: User has been Register with ." + list.get(0) + " "+ "Title");
            sender.send(message);
            responseMsg = "Report Added Successfully!";
            return responseMsg;
        }
		   }
        catch (MessagingException e) {
            e.printStackTrace();
            responseMsg = "Error while sending mail ..But Report has been saved successfully";
            return responseMsg;
        }
		 catch (Exception ex) {
	            ex.printStackTrace();
	            responseMsg = "Error while sending mail ..But Report has been saved successfully";
	            return responseMsg;
	        }
		 return responseMsg;
    }
	
   	public static String saveUploadImage(MultipartFile file, String reportTitle, String reportType, String reportDesc)
			throws IOException {
		String imagePath = "";
		try {
			byte[] bytefile = file.getBytes();
			Long currentTime = System.currentTimeMillis();
			Path files = Paths.get(UPLOAD_PATH + currentTime + file.getOriginalFilename());
			imagePath = currentTime + file.getOriginalFilename();
			Files.write(files, bytefile);
		} catch (Exception e) {

		}
		return imagePath;
    }
   	
	public static Date getCurrentDateFormat()
	{
		Date now = new Date();
		try
		{
		SimpleDateFormat format = new SimpleDateFormat("dd-MM-yyyy hh:mm:ss");
		String dateString = format.format(new Date());
		now = format.parse(dateString);  
		}
		catch(Exception ex)
		{
			
		}
		return now;
	}
	
	
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
