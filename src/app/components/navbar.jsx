"use client"
import "./navbar.css"
import React, { useState } from 'react'
import Link from 'next/link'
import { BiMenu,BiChevronUp } from "react-icons/bi";
const Nav = () => {
  const [isselect,setselect]=useState(false);
  return (
    <>
    <div className="navbar">
    <div className='logo'>
      <Link href="/" className="logo">w-help</Link></div>
      <ul className="nom">
        <Link className="li" href="/Contact">contact</Link>
        <Link className="li" href="doubt">askdoubt</Link>
      
        
      </ul>
      {isselect&&<ul  className={"mob"}>
        <Link className="li" href="Contact">contact</Link>
        <Link className="li" href="doubt">askdoubt</Link>
     
        
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
