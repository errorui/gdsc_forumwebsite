import React from 'react'
import "./banner.css"
import Link from 'next/link'
const Banner = () => {
    return (
        <div className='banner'>
            <div className="bannercontent">
                <h1 className='banner-text'> welcome to W-help</h1>
                <p>ask your doubts and <br />get instant  <span>answer</span></p>
                <p>from proffessional</p>
                <div className="btn">
                <Link  className="btn-text"href="doubt">ask doubt</Link>
                
                </div>
               
            </div>

        </div>
    )
}

export default Banner
