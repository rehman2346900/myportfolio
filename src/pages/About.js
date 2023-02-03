import React from 'react'
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Aboutcontent from "../components/Aboutcontent";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading="About Us" text="I'm Friendly Front-end Developer" />
      <Aboutcontent />
      <Footer />
    </div>
  );
}

export default About