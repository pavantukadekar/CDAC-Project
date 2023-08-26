package com.app.service;

import java.util.List;

import com.app.entities.Assignment;
import com.app.entities.NoticeBoard;
import com.app.entities.TimeTable;
import com.app.entities.User;


public interface StudentService {
    public List<User> getAllFaculties();

	public List<Assignment> getAllAssigments();

	public List<TimeTable> getAllTimeTables();

	public List<NoticeBoard> getAllNoticeBoards();
}
