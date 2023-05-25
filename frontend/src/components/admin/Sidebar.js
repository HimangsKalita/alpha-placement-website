import React from 'react'
import "./sidebar.css";
// import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { TreeView, TreeItem } from "@material-ui/lab";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PostAddIcon from "@material-ui/icons/PostAdd";
import AddIcon from "@material-ui/icons/Add";
import ImportExportIcon from "@material-ui/icons/ImportExport";
import ListAltIcon from "@material-ui/icons/ListAlt";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <Link to="/">ALPHA PLACEMENT</Link>
      <Link to="/company/dashboard">
        <p>
          <DashboardIcon /> Dashboard
        </p>
      </Link>
      <Link>
        <TreeView
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ImportExportIcon />}
        >
          <TreeItem nodeId="1" label="Jobs">
            <Link to="/company/jobs">
              <TreeItem nodeId="2" label="All" icon={<PostAddIcon />} />
            </Link>

            <Link to="/company/job">
              <TreeItem nodeId="3" label="Create" icon={<AddIcon />} />
            </Link>
          </TreeItem>
        </TreeView>
      </Link>
      <Link to="/company/applications">
        <p>
          <ListAltIcon />
          Applications
        </p>
      </Link>
      <Link to="/company/users">
        <p>
          <PeopleIcon /> Users
        </p>
      </Link>
    </div>
  );
};

export default Sidebar
