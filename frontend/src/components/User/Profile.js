import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";
import { useNavigate } from "react-router-dom";
import MetaData from "../MetaData";
import Loader from "../Loader";
import Footer from "../Footer";

const Profile = () => {
    const history=useNavigate();

    const { user, loading, isAuthenticated } = useSelector((state) => state.user);

    useEffect(() => {
        if (isAuthenticated === false) {
          history("/login");
        }
      }, [history, isAuthenticated]);

  return (
    <Fragment>
    {loading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title={`${user.name}'s Profile`} />
        <div className="profileContainer">
          <div>
            <h1>My Profile</h1>
            <img src="userProfile.jpg" alt={user.name} />
            {/* <Link to="/me/update">Edit Profile</Link> */}
          </div>
          <div>
          <div>
          <Link className="ReturnHome" to="/">RETURN HOME</Link>
          </div>
            <div>
              <h4>Full Name</h4>
              <p>{user.name}</p>
            </div>
            <div>
              <h4>Email</h4>
              <p>{user.email}</p>
            </div>
            <div>
              <h4>Joined On</h4>
              <p>{String(user.createdAt).substr(0, 10)}</p>
            </div>

            <div>
              <Link to="/applications">My Appiled Jobs</Link>
              {/* <Link to="/password/update">Change Password</Link> */}
            </div>
          </div>
        </div>
      </Fragment>
    )}
    <div><Footer></Footer></div>
  </Fragment>

  )
}

export default Profile
