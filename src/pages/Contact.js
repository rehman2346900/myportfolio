import React from "react";
import Navbar from "../components/Navbar";
import Heroimg from "../components/Heroimg";
import Form from "../components/Form";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <Heroimg heading="Contact Us" text="I'm Friendly Front-end Developer"/>
      <Form/>
      <Footer />
    </div>
  );
};

export default Contact;
