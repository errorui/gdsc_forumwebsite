"use client"
import React, { useState } from 'react'
import "./style.css"
const page = () => {
  
  const [formData,setData]=useState({
    name:"",
   
    password:""
  })
  
  const changeval=(e)=>{
    setData({...formData,
  [e.target.name]:e.target.value  })
  }
  return (
    <div className='form_login' >
    <h2 className='head'>log in</h2>
     
   
     <input type="text" id='name'  name='name'
      value={formData.name} placeholder='enter your name'
      onChange={changeval}/>
     
     

      
      <input type="password" id='email'
      name='password' value={formData.password}
      onChange={changeval}
      placeholder='enter your password '/>
      
      <button  type="submit" className='btnsub'>sign in</button>

    </div>
  )
}

export default page
