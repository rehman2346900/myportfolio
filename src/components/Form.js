import './Form.css';
 import React from 'react'
 
 const Form = () => {
   return (
     <div className="form">
      <form action="">
        <label For="">Name</label>
        <input type="text" />
        <label For="">Email</label>
        <input type="text" />
        <label For="">Subject</label>
        <input type="text" />
        <label For="">Message</label>
        <textarea name="" id="" rows="6" placeholder='Type your message here'></textarea>
        <button className="btn">Submit</button>
      </form>
     </div>
   )
 }
 
 export default Form