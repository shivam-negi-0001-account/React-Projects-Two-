import React, { useState } from 'react'
import Layout from '../layout/Layout'
import Menu from './Menu'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export default function AddStudent() {
    const [student , setStudent] = useState({
        name:"",
        course:"",
        fees:""
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        setStudent({...student , [e.target.name]:e.target.value})
    }

    const handleStudent = async (e) => {
        e.preventDefault()

        try {
            if (!student.name || !student.course || !student.fees) {
             toast.error('All Fields Invalid !' , {autoClose:"1000" , position:"top-center"})
                
            }
            else{

                axios.post(`http://localhost:3000/student` , {student})
                toast.success('Student Added Successfully !' , {autoClose:"1000" , position:"top-center"})
                setTimeout(() => {
                   navigate('/allstudent')
                }, 2000);
            }
        } catch (error) {
            console.log(error);
            
        }
    }
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-4">
                        <Menu></Menu>
                    </div>
                    <div className="col-md-9 mt-5">
                        <form onSubmit={handleStudent} action="#" className='bg-light mt-3 w-50 border p-3 ms-3'>
                            <h1 style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Student Form </h1>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label  fw-bold fs-5'>Enter Name</label>
                                <input type="text" className='form-control' name='name' value={student.name} onChange={handleChange} />
                            </div>

                            <br></br>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label fw-bold fs-5'>Enter Course</label>
                                <input type="text" className='form-control'  name='course' value={student.course} onChange={handleChange}  />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label  fw-bold fs-5'>Enter fees</label>
                                <input type="text" className='form-control'  name='fees' value={student.fees} onChange={handleChange}  />
                            </div>
                            <div>
                                <button className='btn btn-outline-dark w-100 mt-4'>Add Student</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    )
}
