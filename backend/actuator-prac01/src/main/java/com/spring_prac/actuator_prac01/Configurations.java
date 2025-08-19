package com.spring_prac.actuator_prac01;

import org.springframework.boot.actuate.web.exchanges.HttpExchangeRepository;
import org.springframework.boot.actuate.web.exchanges.InMemoryHttpExchangeRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
//@EnableWebMvc
public class Configurations implements WebMvcConfigurer {
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {		
		registry.addMapping("/**")
			 .allowedOrigins("*")
	         .allowedMethods("*")
	         .allowedHeaders("*");	
	}
	
	@Bean	
    public HttpExchangeRepository httpTraceRepository() {
        return new InMemoryHttpExchangeRepository();
    }

}
