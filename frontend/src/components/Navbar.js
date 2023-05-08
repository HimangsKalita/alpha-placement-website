import React from 'react'
import {Link,useNavigate} from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
export default function Navbar() {

  const navigate=useNavigate();

  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login")
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid ">
    <Link className="navbar-brand fs-3" to="/">Alpha</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav me-auto mb-2">
        <li className="nav-item">
          <Link className="nav-link fs-5" aria-current="page" to="/EditorHome">CodeEditor</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link fs-5" aria-current="page" to="/resume">Resume</Link>
        </li> */}
        <li className="nav-item">
          <Link className="nav-link fs-5" aria-current="page" to="/jobs">Jobs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 active" aria-current="page" to="/search"><SearchIcon/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link fs-5 active" aria-current="page" to="/login"><AccountBoxIcon/></Link>
        </li>
        {(!localStorage.getItem("authToken"))?
        

      <div className='d-flex float-right'>
      
      
      
    <div class="nav-item dropdown">
          <Link className="nav-link dropdown-toggle btn btn-secondary border border-light fs-5 active" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Signup
          </Link>
          <div class="dropdown-menu">
          <Link class="dropdown-item" to="/createuser">User signup</Link>
    <Link class="dropdown-item" to="/createcompany">Company signup</Link>  
          </div>
        </div>
    <div class="nav-item dropdown mx-3 float-right">
          <Link className="nav-link dropdown-toggle btn btn-secondary border border-light fs-5 active" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Login
          </Link>
          <div class="dropdown-menu">
          <Link class="dropdown-item" to="/login">User login</Link>
          <Link class="dropdown-item" to="/companylogin">Company login</Link>  
          <Link class="dropdown-item" to="/adminlogin">Admin login</Link>  
          </div>
        </div>

      </div> 

      
      :
      <div className="btn btn-secondary float-right border border-light mx-3 fs-5" onClick={handleLogout}>
        Logout
      </div>
      
    } 
    {/* <div className='d-flex'>
      <Link className="btn btn-secondary float-right mx-3  border border-light fs-5" to="/login" role="button">Login </Link>
      <Link className="btn btn-secondary float-right border border-light mx-3 fs-5" to="/createuser" role="button">Signup </Link>
      </div> */}

      </ul>
  
   

      
    </div>
  </div>
</nav>
    </div>
  )
}
