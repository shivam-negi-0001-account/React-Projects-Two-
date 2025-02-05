import React from 'react'
import {  NavLink, useNavigate } from 'react-router-dom'

export default function Header() {

  let user = localStorage.getItem('user')
  // let obj = JSON.parse(user)

  const navigate = useNavigate()
  const handleLogout = () => {
    localStorage.clear()
    navigate('/login')

  }

   
  
  return (
    <div>

      {
        user ? <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">WebPage</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link   " aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <button className=" nav-link" onClick={handleLogout}>LogOut</button>
                  </li>
                </ul>

              </div>
            </div>
          </nav>
        </> : <>

          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">WebPage</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink className="nav-link   " aria-current="page" to="/">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className=" nav-link" to="/register">Register</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link mx-2" to="/login">Login</NavLink>
                  </li>





                </ul>

              </div>
            </div>
          </nav>
        </>
      }

    </div>
  )
}
