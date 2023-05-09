package br.com.erudio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Startup {

	public static void main(String[] args) {
		SpringApplication.run(Startup.class, args);
	}

}

//The Swagger documentation is available here:
// UI: http://localhost:8080/swagger-ui/index.html
// API: http://localhost:8080/v3/api-docs