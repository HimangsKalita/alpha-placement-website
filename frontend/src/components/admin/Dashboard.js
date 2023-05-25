import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminJob } from "../../actions/jobAction.js";
// import { getAllOrders } from "../../actions/orderAction.js";
// import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../MetaData.js";



const Dashboard = () => {

  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.jobs);

  // const { applications } = useSelector((state) => state.allOrders);

  // const { users } = useSelector((state) => state.allUsers);

  return (
    <div className="dashboard">
      <Sidebar/>
      <div className="dashboardContainer">
      <Typography component="h1">Dashboard</Typography>
      <div className="dashboardSummary">
      <div>
            {/* <p>
              Total Amount <br /> ₹3433
            </p> */}
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/company/jobs">
              <p>Job</p>
              <p>{jobs && jobs.length}</p>
            </Link>
            <Link to="/company/applications">
              <p>Applications</p>
              <p>5</p>
            </Link>
            <Link to="/company/users">
              <p>Users</p>
              <p>5</p>
            </Link>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Dashboard
