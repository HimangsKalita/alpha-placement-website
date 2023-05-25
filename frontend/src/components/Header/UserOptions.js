import React, { Fragment, useState } from 'react'
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Backdrop, Divider } from '@material-ui/core';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import WorkIcon from '@mui/icons-material/Work';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";
import { useAlert } from 'react-alert';
import { useDispatch,useSelector } from 'react-redux';
import { logout } from '../../actions/userAction';
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";


const UserOptions = ({user}) => {
  const { cartItems } = useSelector((state) => state.cart);
    const [open, setOpen] = useState(false);
    const history=useNavigate();
    const alert = useAlert();
    const dispatch = useDispatch();

    const options = [
        { icon: <ListAltIcon />, name: "Applications", func: applications },
        { icon: <PersonIcon />, name: "Profile", func: account },
        { icon: <HomeIcon />, name: "Home", func: home },
        {
          icon: (
            <ShoppingCartIcon
              style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
            />
          ),
          name: `Cart(${cartItems.length})`,
          func: cart,
        },
        { icon: <WorkIcon />, name: "Jobs", func: jobs },
        
        { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
    ];

    if (user.role === "company") {
        options.unshift({
          icon: <DashboardIcon />,
          name: "Dashboard",
          func: dashboard,
        });
      }

      // function dashboard1() {
      //   history("/admin/dashboard");
      // }
      function dashboard() {
        history("/company/dashboard");
      }
    
      function applications() {
        history("/applications");
      }
      function account() {
        history("/account");
      }
      function home() {
        history("/");
      }
      function jobs() {
        history("/jobs");
      }
      function cart() {
        history("/cart");
      }
      function logoutUser() {
        dispatch(logout());
        history("/");

        alert.success("Logout Successfully");
      }

  return <Fragment>
   <Backdrop open={open} style={{ zIndex: "10" }} />
    <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
            <div className='speedDialIcon'>
            <AccountCircleIcon/>
            </div>
            
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}

        {/* <SpeedDialAction icons={<DashboardIcon/>} tooltipTitle="Dashboard"></SpeedDialAction> */}

      </SpeedDial>
  </Fragment>
    
 
}

export default UserOptions
