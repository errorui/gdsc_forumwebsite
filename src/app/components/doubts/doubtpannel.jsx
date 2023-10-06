"use client"
import React, { useState } from 'react'
import { BiUpvote, BiSolidDownvote } from "react-icons/bi";
import "./pannel.css"
import Link from 'next/link';
import dynamic from "next/dynamic";

const Doubtpannel = (props) => {
    
    let number=props.index
    const [count,setcount]=useState(number)
    return (
        <div className='container-doubt'>
            <div className='group-center'>
                <div>{props.index}</div>
                <div><Link  className="dyn-a"href={`/${props.index}`}>{props.text}</Link></div>
            </div>
            <div className="group-center">
            <BiUpvote   className=' btn opn-btn' onClick={()=>{
                setcount(count+1)
            }}></BiUpvote>
          {count}
<BiSolidDownvote className='btn opn-btn1'
onClick={()=>{
    setcount(count-1)
}}></BiSolidDownvote>
            </div>

           


        </div>
    )
}
export default dynamic (() => Promise.resolve(Doubtpannel), {ssr: false})

// export default Doubtpannel
