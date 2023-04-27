import React, { Fragment, useEffect, useState } from "react";
import "./Jobs.css";
import { useSelector, useDispatch } from "react-redux";
import Footer from "../Footer";
import { clearErrors, getJob } from "../../actions/jobAction";
import Loader from "../Loader";
import { useParams } from "react-router-dom";
import JobCard from "../../screens/JobCard";
import MetaData from "../MetaData";

const Jobs = () => {
    const dispatch = useDispatch();
    const { keyword } = useParams();
    const {
        jobs,
        loading,
        error,
        // jobsCount,
      } = useSelector((state) => state.jobs);

      const key = keyword;

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
    
        dispatch(getJob(key));
      }, [dispatch,key,error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="JOBS -- ALPHA PLACEMENT" />
          <h2 className="jobsHeading">Jobs</h2>

          <div className="jobs">
            {jobs &&
              jobs.map((job) => (
                <JobCard key={job._id} job={job} />
              ))}
          </div>

         <div><Footer></Footer></div>
          
        </Fragment>
      )}
    </Fragment>
  )
}

export default Jobs
