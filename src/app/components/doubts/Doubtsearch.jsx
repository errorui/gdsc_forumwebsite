"use client"
import React, { useState } from 'react'
import { BiPlus } from "react-icons/bi";
import "./style.css"
import useliststore from '@/app/store';
const Searchbox = () => {
    const adddoubt=useliststore(store=>store.adddoubt)

  const [open, setopne] = useState(false)
  const [formdata, setform] = useState({
    question:"",
    qbody:""
  })
  const changeval = (e) => {
    setform({
      ...formdata,
      [e.target.name]: e.target.value
    })

  }
  const onsubmit=(e)=>{
    e.preventDefault();
    console.log(formdata)
    if (!formdata.question) {
           alert("enter the question and context")  
    }else if(!formdata.qbody){
      alert("enter the context")
    }
    else{
      adddoubt(formdata.question,formdata.qbody)
      setform({qbody:"",question:""})
      setopne(!open)
    }
    
    
  }
  return (
    <>
    {open && <div
        className='modal'


      >
        <div className="modalcontent">
          <div className='modalform'>

            <input type="text" name='question'
              value={formdata.question}
              onChange={changeval}
              placeholder='ask your doubt' />
            <textarea name="qbody"
              value={formdata.qbody}
              onChange={changeval}
              id="area" cols="30" rows="10" placeholder='your body'></textarea>

            <div className='plus'> <BiPlus className='x'onClick={onsubmit} ></BiPlus></div>
          </div>
          <button className="doubtbtn" onClick={() => {
            setopne(!open)
          }}>
            close
          </button>

        </div>

      </div>
      }
    <div className='submitdoubt'>
      
      <button className="doubtbtn" onClick={() => {
        setopne(!open)
      }}>ask your doubt</button>

      

      

    </div>
    </>
  )
}

export default Searchbox
