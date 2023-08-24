package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.custom_exceptions.ResourceNotFoundException;
import com.app.entities.Role;
import com.app.entities.User;
import com.app.repository.IUserRepository;

@Service
public class AdminServiceImpl implements IAdminService {

	@Autowired
	IUserRepository userRepo;

	@Override
	public User addFaculty(User u) {
		u.setRole(Role.ROLE_FACULTY);
		return userRepo.save(u);
	}

	@Override
	public User addStudent(User u) {
		u.setRole(Role.ROLE_STUDENT);
		return userRepo.save(u);
	}

	@Override
	public User getFacultyById(Long id) {
		// TODO Auto-generated method stub
		return userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("faculty doesnt exist"));
	}

	@Override
	public User editFacultyDetails(User detachedUser, Long id) {
	    User u=userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("faculty doesnt exist"));
		u.setAddress(detachedUser.getAddress());
		u.setDob(detachedUser.getDob());
		u.setMobNo(detachedUser.getMobNo());
		u.setName(detachedUser.getName());
		return userRepo.save(u);
	}

	@Override
	public List<User> getAllStudents() {
		return userRepo.findByRole(Role.ROLE_ADMIN);
	}

	@Override
	public String deleteStudentDetails(Long id) {
	    User u=userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("student doesnt exist"));
	    userRepo.delete(u);
	    return "Deleted student successfully";
	}

	@Override
	public String deleteFacultyDetails(Long id) {
	    User u=userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("faculty doesnt exist"));
	    userRepo.delete(u);
	    return "Deleted faculty successfully";
	}

	@Override
	public List<User> getAllFaculties() {
		return userRepo.findByRole(Role.ROLE_FACULTY);
	}

	@Override
	public User getStudentById(Long id) {
		return userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("student doesnt exist"));
	}

	@Override
	public User editStudentDetails(User detachedUser, Long id) {
		User u=userRepo.findById(id).orElseThrow(()->new ResourceNotFoundException("student doesnt exist"));
		u.setAddress(detachedUser.getAddress());
		u.setDob(detachedUser.getDob());
		u.setMobNo(detachedUser.getMobNo());
		u.setName(detachedUser.getName());
		return userRepo.save(u);
	}
   
}