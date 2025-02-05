import React from 'react'
import Layout from '../layout/Layout'

export default function PageNotFound() {
  return (
    <Layout>
       <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column", height:"70vh" , textTransform:"capitalize" , fontFamily:"monospace"}}>
       <h1 style={{fontSize:"70px" , color:"red"}}>404</h1>
       <h3 style={{fontSize:"70px" , color:"red"}}> Oops  PAGE NOT FOUND..!</h3>
       </div>
    </Layout>
  )
}
