"use client"
import React from 'react'
import Searchbox from '../components/doubts/Doubtsearch'
import "./search.css"
import Doubtpannel from '../components/doubts/doubtpannel'
import useliststore from '../store'

const page = () => {
  const doubt=useliststore(store=>store.doubts)
  return (
    <div className='searchpage'>
  
        <Searchbox></Searchbox>
        <div className='container'>
             {doubt.map((i,index)=>{
                return(
                    <Doubtpannel index={index+1} key={index}text={i.text}></Doubtpannel>
                )
               
             })}
        </div>
       
    </div>
  )
}

export default page
