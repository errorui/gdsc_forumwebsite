"use client"
import React, { useState } from 'react'
import "./style.css"
import { useRouter, useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation';
import useliststore from '../store';
import { BiUser } from "react-icons/bi";

const page = () => {
    const [comt,setcommets]=useState("")
    const change=(e)=>{

        setcommets(e.target.value)
    }
    const router = useRouter();
    const doubt = useliststore(store => store.doubts)
    // const question_id=router.query.id;
    const id = usePathname();
    const index = id.split("/").pop() - 1

    const title = doubt[index].text;
    const para = doubt[index].body;
    
    const comment=useliststore(store=>store.comments)
    const addcomment=useliststore(store=>store.addcomment)
    const user="you"
       const usercomment= ()=>{

        if (!comt) {
            alert("field must contain at least 1ch")
        }else{
            addcomment(user,comt)
            setcommets("")
        }
       
      }

    return (<>
        <div className='doubt_container'>

            <h1 className='qhead'>{title}</h1>
            <p className='qbody'>{para}</p>
        </div>
        <div className="comments">
            <h3>comments</h3>
            <div className='input'><input
            
            value={comt} 
            type="text" onChange={change} placeholder='enter your comment' />
                <button onClick={
                 usercomment

                }>add</button></div>

        </div>
        <div className="res">
            {comment.slice().reverse().map((i)=>{
                return(
                    <div className="usercom">
                    <div className='userinfo'> <BiUser className='user'></BiUser>
                      <div id='username'>
                      {i.username}
                        </div>  </div>
                        <div className='commetsec'>
                        <h4>{i.comment} </h4>
                        <div>
                            
                        </div>
                        </div>
                  
                </div>
                )
                
            })}
            
        </div>

        </>

    )
}

export default page
