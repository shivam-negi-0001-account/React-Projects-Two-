import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <ul className="list-group">
                <h4 className='text-center fw-bold fs-3 '>Profile</h4>
                <NavLink className="list-group-item " aria-current="true" to={'/profile'}>Dasboard</NavLink>
                <NavLink className="list-group-item" to={'/addstudent'}>Add Student</NavLink>
                <NavLink className="list-group-item" to={'/allstudent'}>All Student </NavLink>
            </ul>

        </div>
    )
}
