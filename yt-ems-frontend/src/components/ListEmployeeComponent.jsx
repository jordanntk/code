import React, { useState, useEffect } from 'react'
import { listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'


export const ListEmployeeComponent = () => {
  
  const [employees, setEmployees] = useState([])

  const navigator = useNavigate()

  useEffect(() => {

    listEmployees().then((response) => {
      setEmployees(response.data)
    }).catch((error) => {
      console.log("Error:", error)
    })

  }, [])

  const addNewEmployee = () => {
    navigator('/add-employee')
  }

  return (
    <div className="container p-3">
        <h2 className="text-center m-4">Table of Employees</h2>
          <button className="btn btn-primary m-2" onClick={addNewEmployee}>Add Employee</button>
          <table className="table table-bordered table-striped table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
          <tbody>
            {
              employees.map(employee =>
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.firstName}</td>
                    <td>{employee.lastName}</td>
                    <td>{employee.email}</td>
                  </tr>
              )
            }
          </tbody>
        </table>
    </div>
  )
}
