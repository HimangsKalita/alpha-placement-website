import React, { Fragment, useRef, useState, useEffect } from "react";
import "./LoginSignUp.css";
import Loader from "../Loader";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import FaceIcon from "@material-ui/icons/Face";
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, login, register } from "../../actions/userAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { useNavigate } from "react-router-dom";
import Navbar from '../../components/Navbar';


const LoginSignup = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history=useNavigate();
    const location=useNavigate();

    const { error, loading, isAuthenticated } = useSelector(
      (state) => state.user
    );

    const loginTab = useRef(null);
    const registerTab = useRef(null);
    const switcherTab = useRef(null);

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
        address:"",
        phone:"",
        role:""
      });

      const { name, email, password,confirmpassword,address,phone,role } = user;

    const loginSubmit = (e) => {
        e.preventDefault();
        dispatch(login(loginEmail, loginPassword));
      };

      const registerSubmit = (e) => {
        e.preventDefault();
    
        const myForm = new FormData();
    
        myForm.set("name", name);
        myForm.set("email", email);
        myForm.set("password", password);
        myForm.set("confirmpassword", confirmpassword);
        myForm.set("address", address);
        myForm.set("phone", phone);
        myForm.set("role", role);
        dispatch(register(myForm));

      };

      const registerDataChange = (e) => {
        
          setUser({ ...user, [e.target.name]: e.target.value });
      };
      const redirect = location.search ? location.search.split("=")[1] : "/account";

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (isAuthenticated) {
          history(redirect);
        }
    
      }, [dispatch, error, alert, history, isAuthenticated,redirect]);

    const switchTabs = (e, tab) => {
        if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral");
          switcherTab.current.classList.remove("shiftToRight");
    
          registerTab.current.classList.remove("shiftToNeutralForm");
          loginTab.current.classList.remove("shiftToLeft");
        }
        if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight");
          switcherTab.current.classList.remove("shiftToNeutral");
    
          registerTab.current.classList.add("shiftToNeutralForm");
          loginTab.current.classList.add("shiftToLeft");
        }
      };

  return (
   <div>
      <div><Navbar/></div>
      <Fragment>
        {loading ? (
          <Loader />
        ) : (
          <Fragment>
            <div><Navbar/></div>
            <div>
              <div><Navbar/></div>
              <div className="LoginSignUpContainer">
                <div className="LoginSignUpBox">
                  <div>
                    <div className="login_signUp_toggle">
                      <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                      <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                    </div>
                    <button ref={switcherTab}></button>
                  </div>
                  <form className="loginForm" ref={loginTab} onSubmit={loginSubmit}>
                    <div className="loginEmail">
                      <MailOutlineIcon />
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={loginEmail}
                        onChange={(e) => setLoginEmail(e.target.value)}
                      />
                    </div>
                    <div className="loginPassword">
                      <LockOpenIcon />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                      />
                    </div>
                    
                    <input type="submit" value="Login" className="loginBtn" />
                  </form>
                  <form
                    className="signUpForm"
                    ref={registerTab}
                    encType="multipart/form-data"
                    onSubmit={registerSubmit}
                  >
                    <div className="signUpName">
                      <FaceIcon />
                      <input
                        type="text"
                        placeholder="Name"
                        pattern="^(\w\w+)\s(\w+)$"
                        required
                        name="name"
                        value={name}
                        title="Enter valid name"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="signUpEmail">
                      <MailOutlineIcon />
                      <input
                        type="email"
                        placeholder="Email"
                        pattern="^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$"
                        required
                        name="email"
                        value={email}
                        title="Enter valid email address"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="signUpPassword">
                      <LockOpenIcon />
                      <input
                        type="password"
                        placeholder="Password"
                        pattern=".{8,}"
                        required
                        name="password"
                        value={password}
                        title="Please enter at least 8 characters"
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="signUpPassword">
                      <LockOpenIcon />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        pattern={user.password}
                        required
                        name="confirmpassword"
                        value={confirmpassword}
                        title="Password doesn't match"
                        onChange={registerDataChange}
                        
                      />
                    </div>
                    <div className="signUpAddress">
                      <HomeIcon />
                      <input
                        type="text"
                        placeholder="Address"
                        required
                        name="address"
                        value={address}
                        onChange={registerDataChange}
                      />
                    </div>
                    <div className="signUpPhone">
                      <LocalPhoneIcon />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        pattern="[6-9]\d{9}"
                        required
                        name="phone"
                        value={phone}
                        title="Phone number format didn't match"
                        onChange={registerDataChange}
                    />
                    </div>
                    <div className="signUpPhone">
                      <input
                        type="text"
                        placeholder="user or company"
                        pattern="(user|company)"
                        required
                        name="role"
                        value={role}
                        title="Please enter user or company"
                        onChange={registerDataChange}
                      />
                    </div>
    
    
                    <input type="submit" value="Register" className="signUpBtn" />
                  </form>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </Fragment>
   </div>
  )
}

export default LoginSignup
