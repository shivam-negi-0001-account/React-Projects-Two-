import React, { useState } from 'react'
import Layout from '../layout/Layout'
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Login() {
    const [userData, setUserData] = useState({
        password: "",
        email: "",
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            axios.get(`http://localhost:3000/users`)
                .then((res) => {
                    // console.log(data);
                    let flag = 0;
                    let len = res?.data.length;
                    for (let i = 0; i < len; i++) {
                        // console.log(res.data[i]);
                        if (res.data[i].name === userData.name && res.data[i].email == userData.email) {
                            flag = 1;
                            toast.success('Login Successfully .!', { autoClose: "1000", position: "top-center" });
                            localStorage.setItem('user', JSON.stringify({ name: res.data[i].name, email: res.data[i].email }))
                            setTimeout(() => {
                                navigate('/profile')
                            }, 2000);
                            break;

                        } else {
                            flag = 0
                        }
                    }
                    if (flag !== 1) {
                        toast.error('Login Faild Try Again !!', { autoClose: "1000", position: "top-center" });
                    }
                })

        } catch (error) {
            console.log(error);

        }






    }
    const navigate = useNavigate()
    return (
        <Layout>
            <div className="container">
                <div className="row">
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit} action="#" className='bg-light mt-5 p-3'>
                            <h1 style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Login  Form </h1>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label  fw-bold fs-5'>Enter Email</label>
                                <input type="email" className='form-control' name='email' value={userData.email} onChange={handleChange} />
                            </div>

                            <br></br>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label fw-bold fs-5'>Enter Password</label>
                                <input type="password" className='form-control' name='password' value={userData.password} onChange={handleChange} />
                            </div>

                            <br></br>


                            <div>
                                <button className='btn btn-outline-dark w-100 mt-4'>Register</button>
                            </div>
                            <div className="mt-3">
                                <p className='fw-bold fs-5 text-center'>Already Register <NavLink className={'fw-bold fs-5 ms-2'} to={'/register'}>Not Register</NavLink></p>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </Layout>
    )
}
