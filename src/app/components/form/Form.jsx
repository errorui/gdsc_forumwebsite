"use client"
import React, { useState } from 'react'
import "./formstyle.css"


const Form = () => {
    
    const [formData,setData]=useState({
        name:"",
        email:"",
        area:""
      })
      
      const changeval=(e)=>{
        setData({...formData,
      [e.target.name]:e.target.value  })
      }
  return (
    <div className='formc' >
        <h2 className='head'>contact us</h2>
         
       
         <input type="text" id='name'  name='name'
          value={formData.name} placeholder='enter your name'
          onChange={changeval}/>
         
         

          
          <input type="text email" id='email'
          name='email' value={formData.email}
          onChange={changeval}
          placeholder='enter your email'/>
          <textarea name="areaa" id="area" cols="30" rows="10" placeholder='your issue'
          onChange={changeval}></textarea>
          <button  type="submit" className='btnsub'>submit</button>

        </div>
  )
}

export default Form
