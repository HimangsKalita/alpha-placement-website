import React from "react";
import "./applySuccess.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const ApplySuccess = () => {
  return (
    <div className="orderSuccess">
    <CheckCircleIcon />

    <h1>Job Applied Successfully </h1>
    <Link to="/applications">View Applications</Link>
  </div>

  )
}

export default ApplySuccess
