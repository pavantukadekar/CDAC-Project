package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.entities.Assignment;
import com.app.entities.NoticeBoard;
import com.app.entities.Role;
import com.app.entities.TimeTable;
import com.app.entities.User;
import com.app.repository.AssignmentRepository;
import com.app.repository.IUserRepository;
import com.app.repository.NoticeBoardRepository;
import com.app.repository.TimeTableRepository;

@Service
@Transactional

public class StudentServiceImpl implements StudentService {
	
	@Autowired
	private IUserRepository userRepo;
    @Autowired
    private AssignmentRepository assignRepo;
    @Autowired
    private TimeTableRepository timeRepo;
    @Autowired
    private NoticeBoardRepository noticeRepo;
	@Override
	public List<User> getAllFaculties() {
		// TODO Auto-generated method stub
		return userRepo.findByRole(Role.ROLE_FACULTY);
	}

	@Override
	public List<Assignment> getAllAssigments() {
		// TODO Auto-generated method stub
		return assignRepo.findAll();
	}

	@Override
	public List<TimeTable> getAllTimeTables() {
		// TODO Auto-generated method stub
		return timeRepo.findAll();
	}

	@Override
	public List<NoticeBoard> getAllNoticeBoards() {
		// TODO Auto-generated method stub
		return noticeRepo.findAll();
	}

}
