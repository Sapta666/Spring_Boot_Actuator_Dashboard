package com.spring_prac.actuator_prac01.controller;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "basicTest")
public class BasicTestController {
	
	@GetMapping(path = "getTest01")
	public String getTest01() {
		return "Get Test 01 Success";
	}
	
	@PostMapping(path = "postTest02")
	public String postTest02() {
		return "Post Test 02 Success";
	}
	
	@PutMapping(path = "putTest03")
	public String putTest03() {
		return "Put Test 03 Success";
	}
	
	@DeleteMapping(path = "deleteTest04")
	public String deleteTest04() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return "Delete Test 04 Success";
	}

}
