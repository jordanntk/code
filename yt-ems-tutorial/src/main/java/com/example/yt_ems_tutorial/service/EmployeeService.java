package com.example.yt_ems_tutorial.service;

import com.example.yt_ems_tutorial.dto.EmployeeDto;

public interface EmployeeService {
    EmployeeDto createEmployee(EmployeeDto employeeDto);    
    EmployeeDto getEmployeeById(Long employeeId);
    
}
