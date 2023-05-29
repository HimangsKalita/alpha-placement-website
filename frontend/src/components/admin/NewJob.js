import React, { Fragment, useEffect, useState } from "react";
import "./newJob.css";
// import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import DescriptionIcon from "@material-ui/icons/Description";
import StorageIcon from "@material-ui/icons/Storage";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";
import SideBar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { NEW_JOB_RESET } from "../../constants/jobConstant";
import { clearErrors,createJob } from "../../actions/jobAction";
import { useDispatch, useSelector } from "react-redux";

const NewJob = () => {
  const dispatch = useDispatch();
  const history=useNavigate()
  const alert = useAlert();

  const { loading, error, success } = useSelector((state) => state.newJob);

  const [title, setTitle] = useState("");
  const [ctc, setCtc] = useState("");
  const [description, setDescription] = useState("");
  const [vacancy, setVacancy] = useState(0);
  const [location, setLocation] = useState("");
  const [startdate, setStartdate] = useState("");
  const [jobStatus, setJobStatus] = useState("");
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Job Created Successfully");
      history("/company/dashboard");
      dispatch({ type: NEW_JOB_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createJobSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("title", title);
    myForm.set("ctc", ctc);
    myForm.set("description", description);
    myForm.set("vacancy", vacancy);
    myForm.set("location", location);
    myForm.set("startdate", startdate);
    myForm.set("jobStatus", jobStatus);

    images.forEach((image) => {
      myForm.append("images", image);
    });
    dispatch(createJob(myForm));
  };

  const createJobImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          <form
            className="createProductForm"
            encType="multipart/form-data"
            onSubmit={createJobSubmitHandler}
          >
            <h1>Create Job</h1>

            <div>
              <SpellcheckIcon />
              <input
                type="text"
                placeholder="Job Title"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <AttachMoneyIcon />
              <input
                type="text"
                placeholder="ctc"
                required
                onChange={(e) => setCtc(e.target.value)}
              />
            </div>

            <div>
              <DescriptionIcon />

              <textarea
                placeholder="Job Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                cols="30"
                rows="1"
              ></textarea>
            </div>
            <div>
              <StorageIcon />
              <input
                type="number"
                placeholder="Vacancy"
                required
                onChange={(e) => setVacancy(e.target.value)}
              />
            </div>
            <div>
              <LocationOnIcon />
              <input
                type="text"
                placeholder="Location"
                required
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div>
              <CalendarMonthIcon />
              <input
                type="text"
                placeholder="Start Date"
                required
                onChange={(e) => setStartdate(e.target.value)}
              />
            </div>
            <div>
              <WorkOutlineIcon />
              <input
                type="text"
                placeholder="Job Status"
                required
                onChange={(e) => setJobStatus(e.target.value)}
              />
            </div>

            <div id="createProductFormFile">
              <input
                type="file"
                name="avatar"
                accept="image/*"
                onChange={createJobImagesChange}
                multiple
              />
            </div>

            <div id="createProductFormImage">
              {imagesPreview.map((image, index) => (
                <img key={index} src={image} alt="Product Preview" />
              ))}
            </div>

            <Button
              id="createProductBtn"
              type="submit"
              disabled={loading ? true : false}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default NewJob
