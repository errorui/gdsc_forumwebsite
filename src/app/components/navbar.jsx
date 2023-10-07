"use client"
import "./navbar.css"
import React, { useState } from 'react'
import Link from 'next/link'
import { BiMenu,BiChevronUp } from "react-icons/bi";
const Nav = () => {
  const [isselect,setselect]=useState(false);
  const open=()=>{
    setselect(!isselect)
  }
  return (
    <>
    <div className="navbar">
    <div className='logo'>
      <Link href="/" className="logo">w-help</Link></div>
      <ul className="nom">
        
        <Link onClick={open} className="li" href="/doubt">askdoubt</Link>
        <Link onClick={open} className="li" href="/Contact">contact</Link>
        <Link onClick={open} className="li" href="/signup">sign up</Link>
      
        
      </ul>
      {isselect&&<ul  className={"mob"}>
       
        <Link onClick={open} className="li" href="/doubt">askdoubt</Link>
        <Link onClick={open} className="li" href="/Contact">contact</Link>
        <Link onClick={open} className="li" href="/signup">sign up</Link>
     
        
      </ul>}
      {!isselect?<BiMenu className="menu" onClick={()=>{
            setselect(!isselect)
          }}></BiMenu>:<BiChevronUp className="menu" onClick={()=>{
            setselect(!isselect)
          }}></BiChevronUp>}
          
    </div>
    </>
  )
}

export default Nav
