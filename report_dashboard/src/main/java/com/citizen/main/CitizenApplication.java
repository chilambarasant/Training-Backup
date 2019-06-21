package com.citizen.main;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.ApplicationContext;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(scanBasePackages = {"com"})
@EntityScan("com.citizen.entity")
@EnableJpaRepositories("com.citizen.repository")
@EnableSwagger2
public class CitizenApplication {
	private static ApplicationContext applicationContext;
	
	public static void main(String[] args) {
		applicationContext = SpringApplication.run(CitizenApplication.class, args);
	}

	
	@RestController
	class MessageRestController {
		
	
	 
	    @Value("${msg:Hello world - Config Server is not working..pelase check}")
	    private String msg;
	 
	    @RequestMapping("/msg")
	    String getMsg() {
	        return this.msg;
	    }
	}
}
