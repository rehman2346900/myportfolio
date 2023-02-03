import './Aboutcontent.css'
import React from 'react'
import {Link} from 'react-router-dom'

const Aboutcontent = () => {
  return (
    <div className='about'>
      <div className="left">
        <h1>Who Am I</h1>
        <p>I'm a Front-end Web developer. I create responsive, secure and amazing web pages for you.</p>
        <Link to="/contact">
          <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className="right">

        <div className="img-container">
          <div className="img-stack top">
            <img className='img' src="https://www.syncfusion.com/blogs/wp-content/uploads/2020/07/Top-6-Front-End-Web-Development-Tools-to-Increase-Your-Productivity-in-2020-1.jpg" alt="" />
          </div>
          <div className="img-stack bottom">
          <img className='img' src="https://ares.decipherzone.com/blog-manager/uploads/banner_webp_bea99db8-7dba-41e7-941c-de4b61cc1650.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutcontent