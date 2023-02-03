import './Projectcard.css'
 import React from 'react'
 import { NavLink } from 'react-router-dom'
 
 const Projectcard = () => {
   return (
     <div className="project-card">
      <h1 className="project-heading">Projects</h1>
      <div className="project-cont">
       <div className="project">
        <img src="https://assets.materialup.com/uploads/040745a3-8dfa-4a5f-8635-dc487b7d5a41/preview.jpg" alt="" />
        <h2 className="project-title">Project1</h2>
        <div className="project-desc">
          <p>This isn text</p>
          <div className="pro-btns">
            <NavLink to="url.com" className="btn">Veiw</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
          </div>
        </div>
       </div>

       <div className="project">
        <img src="https://assets.materialup.com/uploads/040745a3-8dfa-4a5f-8635-dc487b7d5a41/preview.jpg" alt="" />
        <h2 className="project-title">Project1</h2>
        <div className="project-desc">
          <p>This isn text</p>
          <div className="pro-btns">
            <NavLink to="url.com" className="btn">Veiw</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
          </div>
        </div>
       </div>

       <div className="project">
        <img src="https://assets.materialup.com/uploads/040745a3-8dfa-4a5f-8635-dc487b7d5a41/preview.jpg" alt="" />
        <h2 className="project-title">Project1</h2>
        <div className="project-desc">
          <p>This isn text</p>
          <div className="pro-btns">
            <NavLink to="url.com" className="btn">Veiw</NavLink>
            <NavLink to="url.com" className="btn">Source</NavLink>
          </div>
        </div>
       </div>
      </div>
     </div>
   )
 }
 
 export default Projectcard