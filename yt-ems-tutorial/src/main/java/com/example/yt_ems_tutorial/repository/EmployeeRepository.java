
package com.example.yt_ems_tutorial.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.yt_ems_tutorial.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}