package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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


}