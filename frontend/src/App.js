import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/js/src/carousel';
import './App.css';
import Home from './screens/Home';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Login from './screens/Login';
// import Resume from './screens/Resume';
// import Signup from './screens/Signup';
// import AdminSignup from './screens/AdminSignup';
// import AdminLogin from './screens/AdminLogin';
// import CompanyLogin from './screens/CompanyLogin';
// import CompanySignup from './screens/CompanySignup';
import Editor from './screens/Editor';
import JobDetails from './components/Job/JobDetails';
import Jobs from './components/Job/Jobs.js'
import Search from './components/Job/Search.js'
import LoginSignup from './components/User/LoginSignup';



function App() {

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          {/* <Route exact path="/login" element={<Login />} /> */}
          {/* <Route exact path="/resume" element={<Resume />} /> */}
          {/* <Route exact path="/createuser" element={<Signup />} /> */}
          {/* <Route exact path="/createadmin" element ={<AdminSignup/>}/> */}
          {/* <Route exact path="/adminlogin" element={<AdminLogin />} /> */}
          {/* <Route exact path="/createcompany" element={<CompanySignup />} /> */}
          {/* <Route exact path="/companylogin" element={<CompanyLogin />} /> */}
          <Route exact path="/editor" element={<Editor />} />
          <Route exact path="/job/:id" element={<JobDetails />} />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route  path="/jobs/:keyword" element={<Jobs />} />
          <Route exact path="/search" element={<Search />} />
          <Route exact path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
