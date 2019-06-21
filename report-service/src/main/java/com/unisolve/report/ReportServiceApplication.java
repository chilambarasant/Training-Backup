package com.unisolve.report;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.service.ApiInfo;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EntityScan("com.unisolve.report.model")
@EnableJpaRepositories("com.unisolve.report.repository")
@EnableSwagger2
@SpringBootApplication(scanBasePackages = { "com" })
public class ReportServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(ReportServiceApplication.class, args);
	}
	

	/**
	 * @return ApiInfo
	 */
	private ApiInfo metaData() {
		@SuppressWarnings("deprecation")
		ApiInfo apiInfo = new ApiInfo("Reports  Service API", "Operations with Order Details", "1.0", "Terms of service",
				"Apache License Version 2.0", "https://www.apache.org/licenses/LICENSE-2.0", "");
		return apiInfo;
	}
}
