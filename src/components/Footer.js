import React from 'react'
import { FaFacebook, FaTwitter, FaHome, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import "./Footer.css"
const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer-container">
        <div className="right">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Pakistan</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              +92 310 1450871
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              raziz7407@gmail.com
            </h4>
          </div>
        </div>

        <div className="left">
          <h4>About the company</h4>
          <p>Hey, this is Aziz Ur Rehman. Founder Eukodec solutions. I like working on new projects as well as making some attactive front-end web pages.</p>
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaTwitter size={30} style={{ color: "#fff", marginRight: "2rem" }} />
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer