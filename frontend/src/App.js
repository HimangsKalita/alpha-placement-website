import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/src/carousel';
import './App.css';
import Home from './screens/Home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import EditorHome from './screens/EditorHome';
// import Login from './screens/Login';
// import Resume from './screens/Resume';
// import Signup from './screens/Signup';
// import AdminSignup from './screens/AdminSignup';
// import AdminLogin from './screens/AdminLogin';
// import CompanyLogin from './screens/CompanyLogin';
// import CompanySignup from './screens/CompanySignup';
import JobDetails from './components/Job/JobDetails';
import Jobs from './components/Job/Jobs.js'
import Search from './components/Job/Search.js'
import LoginSignup from './components/User/LoginSignup';
import React from 'react';
import store from './store'
import { loadUser } from './actions/userAction';
import UserOptions from "./components/Header/UserOptions.js";
import { useSelector } from 'react-redux';
import Profile from "./components/User/Profile.js";
import MyApplications from "./components/Application/MyApplications.js";
// import UpdateProfile from "./components/User/UpdateProfile.js"



function App() {

  const { isAuthenticated, user } = useSelector((state) => state.user);

  React.useEffect(()=>{
    store.dispatch(loadUser())
  },[]);

  return (
    <Router>
      <div>
        
        {isAuthenticated && <UserOptions user={user} />}
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/editorhome" element={<EditorHome />} /> */}
          {/* <Route exact path="/resume" element={<Resume />} /> */}
          {/* <Route exact path="/createuser" element={<Signup />} /> */}
          {/* <Route exact path="/createadmin" element ={<AdminSignup/>}/> */}
          {/* <Route exact path="/adminlogin" element={<AdminLogin />} /> */}
          {/* <Route exact path="/createcompany" element={<CompanySignup />} /> */}
          {/* <Route exact path="/companylogin" element={<CompanyLogin />} /> */}
          <Route exact path="/job/:id" element={<JobDetails />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route  path="/jobs/:keyword" element={<Jobs />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/account" element={< Profile/>} />
          <Route exact path="/applications" element={< MyApplications/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
