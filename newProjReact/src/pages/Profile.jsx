import React from 'react'
import Layout from '../layout/Layout'
import Menu from './Menu'

export default function Profile() {
    let user = localStorage.getItem('user')
    let obj = JSON.parse(user)
    // console.log(obj);

    return (
        <Layout>

            <div className="container">
                <div className="row">
                    <div className="col-md-3 mt-4">
                        <Menu></Menu>
                    </div>
                    <div className="col-md-9 mt-5">
                        <h3>welcome User Details </h3>
                        <table className="table table-bordered w-50">
                            <thead>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Name</th>
                                    <td>{obj?.name}</td>
                                </tr>
                                
                                <tr>
                                    <th scope="row">Email</th>
                                    <td>{obj?.email}</td>

                                </tr>

                            </tbody>
                        </table>

                    </div>
                </div>

            </div>
        </Layout>
    )
}
