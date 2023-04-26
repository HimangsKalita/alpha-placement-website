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



const LoginSignup = () => {
    const dispatch = useDispatch();
    const alert = useAlert();
    const history=useNavigate();

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

      useEffect(() => {
        if (error) {
          alert.error(error);
          dispatch(clearErrors());
        }
        if (isAuthenticated) {
          history("/account");
        }
    
      }, [dispatch, error, alert, history, isAuthenticated,]);

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
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
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
                    required
                    name="name"
                    value={name}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpEmail">
                  <MailOutlineIcon />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="email"
                    value={email}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                  />
                </div>
                <div className="signUpPassword">
                  <LockOpenIcon />
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    required
                    name="confirmpassword"
                    value={confirmpassword}
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
                    type="text"
                    placeholder="Phone Number"
                    required
                    name="phone"
                    value={phone}
                    onChange={registerDataChange}
                  />
                </div>

                <input type="submit" value="Register" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default LoginSignup
