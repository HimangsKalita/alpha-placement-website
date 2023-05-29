import React, { useEffect } from "react";
import Sidebar2 from "./Sidebar2.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAdminJob } from "../../actions/jobAction.js";
// import { getAllOrders } from "../../actions/orderAction.js";
import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../MetaData.js";



const Dashboard = () => {

  const dispatch = useDispatch();

  const { jobs } = useSelector((state) => state.jobs);

  // const { applications } = useSelector((state) => state.allOrders);

  const { users } = useSelector((state) => state.allUsers);

  return (
    <div className="dashboard">
      <Sidebar2/>
      <div className="dashboardContainer">
      <Typography component="h1">Admin Dashboard</Typography>
      <div className="dashboardSummary">
      <div>
            {/* <p>
              Total Amount <br /> ₹3433
            </p> */}
          </div>
          <div className="dashboardSummaryBox2">
            <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link>
            <Link to="/admin/jobs">
              <p>Job</p>
              <p>{jobs && jobs.length}</p>
            </Link>
          </div>

      </div>
      </div>
    </div>
  )
}

export default Dashboard
