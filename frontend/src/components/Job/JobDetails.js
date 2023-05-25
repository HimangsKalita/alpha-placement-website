import React, { Fragment, useEffect, useState } from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Footer from '../Footer';
import "./JobDetails.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getJobDetails,
} from "../../actions/jobAction";
import { useParams } from "react-router-dom";
import Loader from "../Loader";
import { useAlert } from "react-alert";
import MetaData from "../MetaData";
import { useNavigate } from "react-router-dom";
import {addItemsToCart} from "../../actions/cartAction";
import Navbar from  "../../components/Navbar"



const JobDetails = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { id } = useParams();
  const history = useNavigate()

  const { job, loading, error } = useSelector(
    (state) => state.jobDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }


    dispatch(getJobDetails(id));
    }, [dispatch,  id, error, alert]);


    const addToCartHandler = () => {
      dispatch(addItemsToCart(id));
      alert.success("Item Added To Cart");
    };


  return (
    <Fragment>
      {loading? <Loader/> :
      <Fragment>

  <MetaData title={`${job.title} -- ALPHA PLACEMENT`} />
  <div><Navbar/></div>

  
          <div className="JobDetails">
            <div>
                {job.images &&
                  job.images.map((item, i) => (
                    <img
                      className="CarouselImage"
                      key={i}
                      src={item.url}
                      alt={`${i} Slide`}
                    />
                  ))}
              
              </div>
                   
              <div>
              <div className="detailsBlock-1">
                <h2>{job.title}</h2>
                <p >Job # {job._id}</p>
              </div>
              <div className="detailsBlock-3">
                <h1>{`${job.ctc}`}</h1>
                <div className="detailsBlock-3-1">
                <p><LocationOnIcon/> {job.location}</p>
                  
                  <p>Start Date: {job.startdate}</p>
                    
                
              </div>

              <div className="detailsBlock-4">
                Description : <p>{job.description}</p>

                <button className="applyButton" onClick={addToCartHandler}>ADD TO JOB MANAGER</button>
              </div>
            </div>
          </div>
          </div>
      
    <Footer></Footer>
    </Fragment>
      }
    </Fragment>
  )
}

export default JobDetails
