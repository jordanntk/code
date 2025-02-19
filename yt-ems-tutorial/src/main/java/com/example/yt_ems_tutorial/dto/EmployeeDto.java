package com.example.yt_ems_tutorial.dto;
//import lombok allargs, noargs, getter and setter
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

//annotate all of my above imports
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor


public class EmployeeDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    
}
