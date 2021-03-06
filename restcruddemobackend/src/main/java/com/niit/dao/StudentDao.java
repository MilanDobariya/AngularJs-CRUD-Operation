package com.niit.dao;

import java.util.List;

import com.niit.models.Student;

public interface StudentDao {
List<Student> getAllStudents();

Student saveStudent(Student student);
Student getStudentById(int id);

void deleteStudent(int id);
void updateStudent(Student student);//update student set name=?,age=?
}
