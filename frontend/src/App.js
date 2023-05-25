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
import Editor from './screens/Editor';
import Resume from './screens/Resume'

import MyApplications from "./components/Application/MyApplications.js";
import ApplicationDetails from "./components/Application/ApplicationDetails.js" 
// import Apply from "./components/Application/Apply.js";
// import UpdateProfile from "./components/User/UpdateProfile.js"
import Cart from "./components/Cart/Cart.js"
import ConfirmApply from "./components/Cart/ConfirmApply.js"



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
          <Route exact path="/editor" element={<Editor />} />
          <Route exact path="/resume" element={<Resume />} />
          <Route exact path="/job/:id" element={<JobDetails />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route  path="/jobs/:keyword" element={<Jobs />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignup />} />
          <Route exact path="/account" element={< Profile/>} />
          {/* <Route exact path="/apply" element={< Apply/>} /> */}
          <Route exact path="/applications" element={< MyApplications/>} />
          <Route exact path="/application/:id" element={< ApplicationDetails/>} />
          <Route exact path="cart" element={< Cart/>} />
          <Route exact path="apply" element={< ConfirmApply/>} />

          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
