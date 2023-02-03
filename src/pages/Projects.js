import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Pricecard from "../components/Pricecard";
import Projectcard from "../components/Projectcard";
import Footer from "../components/Footer";
const Projects = () => {
  return (
    <div>
          <Navbar/>
           <Heroimg heading="PROJECTS" text="I'm Friendly Front-end Developer"/>
           <Projectcard/>
           <Pricecard/>
    <Footer/>
    </div>
  )
}

export default Projects
