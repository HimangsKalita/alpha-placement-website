import React from "react";

import Header from "../components/Headers/Header";
import Body from "../components/Body/Body";
import Navbar from '../components/Navbar';

import "./Resume.css";

function Resume() {
  return (
    <div className="App">
      <div><Navbar/></div>
      {/* <Header /> */}
      <Body />
    </div>
  );
}

export default Resume;
