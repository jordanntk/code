import React from 'react'
import { useState } from 'react'
import { addEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

export const EmployeeComponent = () => {
  
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })

    const navigator = useNavigate()

    function validateForm() {
        let valid = true

        const errorsCopy = {... errors}

        if (firstName.trim()){
            errorsCopy.firstName = ''
        } else {
            errorsCopy.firstName = 'First name is required'
            valid = false
        }
        
        if (lastName.trim()){
            errorsCopy.lastName = ''
        } else {
            errorsCopy.lastName = 'Last name is required'
            valid = false
        }
        
        if (email.trim()){
            errorsCopy.email = ''
        } else {
            errorsCopy.email = 'Email is required'
            valid = false
        }

        setErrors(errorsCopy)
        return valid;
    }

    function saveEmployee(e){

        e.preventDefault();

        if(validateForm()) {
            const employee = {
                firstName: firstName,
                lastName: lastName,
                email: email
            }
            console.log('Employee:', employee)
            addEmployee(employee)
            .then((response) => {
                console.log('Employee added successfully:', response.data)
                navigator('/employees')
            })            
        } else {

        }
    }

    return (
    <div className='container d-flex justify-content-center align-items-center vh-100'>
        <div className='card col-md-7'>
            <div className='card-header'>
            <h2 className='text-center m-4'>Add an employee</h2>
                <form>
                <div className="mb-3">
                    <label for="firstName" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="firstName" 
                        placeholder="Enter employee's first name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        >
                    </input>
                    <label for="lastName" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="lastName" 
                        placeholder="Enter employee's last name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        >
                    </input>
                    <label for="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Enter employee's email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </input>
                </div>
                <button type="submit" className="btn btn-success" onClick={saveEmployee}>Submit</button>
                </form>
            </div>
            </div>
    </div>
  )
}
