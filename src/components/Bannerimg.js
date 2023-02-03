import "./Bannerimg.css";
import React from 'react';
import { Link } from "react-router-dom";
import Introimg from "../assets/images.jfif";
const Bannerimg = () => {
  return (
    <div className="hero">
      <div className="bannerimg">
        <img src="https://static.vecteezy.com/system/resources/previews/002/065/148/original/top-view-of-modern-workplace-laptop-coffee-paper-note-pencil-on-the-white-background-and-copy-space-for-text-business-concept-illustration-free-vector.jpg" className="heroimg" alt="" />
      </div>
      <div className="content">
        <p>HI, I'M A SOFTWARE ENGINEER</p>
        <h1>React Developer</h1>
        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/projects" className="btn btn-light">Contact</Link>
        </div>

      </div>
  
    </div>
  )
}

export default Bannerimg