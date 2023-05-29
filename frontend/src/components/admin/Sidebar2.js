import React from 'react'
import "./sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import { TreeView, TreeItem } from "@material-ui/lab";
import AddIcon from "@material-ui/icons/Add";
import PostAddIcon from "@material-ui/icons/PostAdd";


const Sidebar2 = () => {
  return (
    <div className='sidebar'>
    <Link className='title' to="/">ALPHA PLACEMENT</Link>
      <Link to="/admin/dashboard2">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link to="/admin/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
      <Link to="/admin/jobs">
             <PostAddIcon /> Jobs
           </Link>
    </div>
  );
};

export default Sidebar2
