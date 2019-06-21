package com.unisolve.uam;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication(scanBasePackages = {"com"})
@EntityScan("com.unisolve.uam.model")
@EnableJpaRepositories("com.unisolve.uam.repository")
@EnableSwagger2
public class UnisolveUamServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(UnisolveUamServiceApplication.class, args);
	}

	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2).select()
				.apis(RequestHandlerSelectors.basePackage("com.unisolve.uam.controller"))
				.build().apiInfo(metaData());
	}

	/**
	 * @return ApiInfo
	 */
	private ApiInfo metaData() {
		@SuppressWarnings("deprecation")
		ApiInfo apiInfo = new ApiInfo("Reports View Service API", "Operations with Order Details", "1.0", "Terms of service",
				"Apache License Version 2.0", "https://www.apache.org/licenses/LICENSE-2.0", "");
		return apiInfo;
	}
}
