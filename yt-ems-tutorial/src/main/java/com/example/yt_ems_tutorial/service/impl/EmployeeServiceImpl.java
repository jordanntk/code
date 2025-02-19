package com.example.yt_ems_tutorial.service.impl;

import org.springframework.stereotype.Service;

import com.example.yt_ems_tutorial.dto.EmployeeDto;
import com.example.yt_ems_tutorial.entity.Employee;
import com.example.yt_ems_tutorial.mapper.EmployeeMapper;
import com.example.yt_ems_tutorial.service.EmployeeService;
import com.example.yt_ems_tutorial.repository.EmployeeRepository;

import lombok.AllArgsConstructor;


@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);
        Employee savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

}
