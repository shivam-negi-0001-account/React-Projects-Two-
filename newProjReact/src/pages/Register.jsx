import { NavLink, useNavigate } from 'react-router-dom'
import Layout from '../layout/Layout'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function Register() {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // console.log(user);
       try {
        const URL  = `http://localhost:3000/users`

        const {data} = await axios.post(URL , userData)

        console.log(data);

        setUserData({name:"" , email:"" , password:""})

        toast.success('Registeration Successfully !' , {autoClose:"1000" , position:"top-center"})

        setTimeout(()=>{

            navigate('/login')
            
        },2000)

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
                            <h1 style={{ textAlign: "center", color: "red", fontWeight: "bold" }}>Registeration Form </h1>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label  fw-bold fs-5'>Enter Name</label>
                                <input type="text" className='form-control' name='name' value={userData.name} onChange={handleChange} />
                            </div>

                            <br></br>
                            <div className="form-group">
                                <label htmlFor="#" className='form-label fw-bold fs-5'>Enter Email</label>
                                <input type="text" className='form-control' name='email' value={userData.email} onChange={handleChange} />
                            </div>

                            <br></br>

                            <div className="form-group">
                                <label htmlFor="#" className='form-label  fw-bold fs-5'>Enter Password</label>
                                <input type="password" className='form-control' name='password' value={userData.password} onChange={handleChange} />
                            </div>
                            <div>
                                <button className='btn btn-outline-dark w-100 mt-4'>Register</button>
                            </div>
                            <div className="mt-3">
                                <p className='fw-bold fs-5 text-center'>Already Register <NavLink className={'fw-bold fs-5 ms-2'} to={'/login'}>Click Here</NavLink></p>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </Layout>
    )
}
