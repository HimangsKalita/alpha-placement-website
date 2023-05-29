import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
    <div><Navbar/></div>
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:arnabsarma833@gmail.com">
        <Button>Contact: arnabsarma833@gmail.com</Button>
      </a>
    </div>
    </div>
  );
};

export default Contact;