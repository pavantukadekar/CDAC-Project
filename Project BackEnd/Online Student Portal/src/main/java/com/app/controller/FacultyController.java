package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.service.FacultyService;

@RestController
@RequestMapping("/student")
public class FacultyController {
     @Autowired
     private FacultyService facultyService;
}
