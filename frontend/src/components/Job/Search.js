import React, { useState, Fragment } from "react";
import "./Search.css";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import MetaData from "../MetaData";
import Navbar from '../Navbar';

const Search = () => {

    const [keyword, setKeyword] = useState("");
    const history=useNavigate();

    const searchSubmitHandler = (e) => {
        e.preventDefault();
        if (keyword.trim()) {
          history(`/jobs/${keyword}`);
        } else {
          history("/jobs");
        }
      };
  return (
    <Fragment>
      <div><Navbar/></div>

    <div>
    <div><Navbar/></div>

      <MetaData title="Search JOBS -- ALPHA PLACEMENT" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
      {/* <div><Navbar/></div> */}

        <input
          type="text"
          placeholder="Search Jobs ..."
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
</div>
      <div><Footer></Footer></div>
    </Fragment>
  )
}

export default Search;
