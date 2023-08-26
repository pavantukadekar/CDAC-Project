package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.service.StudentService;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {
     @Autowired
     private StudentService studService;
     @GetMapping("/faculty")
     public ResponseEntity<?> getAllFaculty()
     {
    	 try {
    	 return ResponseEntity.status(HttpStatus.OK).body(studService.getAllFaculties());
    	 }
    	 catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
     }
     @GetMapping("/assignment")
     public ResponseEntity<?> getAllAssignments()
     {
    	 try {
    		 return ResponseEntity.status(HttpStatus.OK).body(studService.getAllAssigments());
    	 }catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
     }
     @GetMapping("/timetable")
     public ResponseEntity<?> getAllTimeTables()
     {
    	 try {
    		 return ResponseEntity.status(HttpStatus.OK).body(studService.getAllTimeTables());
    	 }catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
     }
     @GetMapping("/noticeboard")
     public ResponseEntity<?> getAllNoticeBoards()
     {
    	 try {
    		 return ResponseEntity.status(HttpStatus.OK).body(studService.getAllNoticeBoards());
    	 }catch (Exception e) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ApiResponse(e.getMessage()));
		}
     }
     
}
