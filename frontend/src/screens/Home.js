import React, { Fragment }  from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Job from "./JobCard.js";
import MetaData from '../components/MetaData';
import {clearErrors, getJob} from "../actions/jobAction";
import {useSelector,useDispatch} from "react-redux";
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { useAlert } from "react-alert";


export default function Home() {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, jobs } = useSelector((state) => state.jobs);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getJob());
  }, [dispatch, error,alert]);

  return (
    
    <Fragment>

      {loading ? <Loader/> : <Fragment>
    <MetaData title="ALPHA PLACEMENT"></MetaData>

    <div><Navbar/></div>
    <div>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner containerHome fitimage">
    <div class="carousel-item active">

      <div class="centered">ALPHA PLACEMENT WEBSITE</div>
      <img className="imageHome" src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <div class="centered">ALPHA PLACEMENT WEBSITE</div>
      <img className="imageHome" src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <div class="centered">ALPHA PLACEMENT WEBSITE</div>
      <img className='imageHome' src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" class="d-block w-100" alt="..."/>
 </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<h2 className="homeHeading">Featured Jobs</h2>

<div className="container1" id="container1">
  {jobs && jobs.map((job) =>{
    return(
    <Job job={job} />
    )
  })}

</div>
    </div>
    <div><Footer></Footer></div>
    </Fragment>}
    </Fragment>
   
  )
}