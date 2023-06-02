import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../MetaData";
import "./ConfirmApplyDetails.css";
import { Link, useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import {createApply,clearErrors} from "../../actions/applicationAction"
import { useAlert } from "react-alert";


const ConfirmApplyDetails = () => {

  const dispatch = useDispatch();
  const alert = useAlert();

  const applyInfo = JSON.parse(sessionStorage.getItem("orderInfo"));

  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
    const history=useNavigate();
  const { user } = useSelector((state) => state.user);
  const address = `${shippingInfo.address}, ${shippingInfo.state}, ${shippingInfo.pinCode}, ${shippingInfo.country}`;

  const { error } = useSelector((state) => state.newApply);

  const apply = {
    shippingInfo,
    // ctc: applyInfo.ctc,
    applyDetails: cartItems,
  };

  const proceedToPayment = () => {

    dispatch(createApply(apply));
    history("/success");
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error, alert]);



  return (
    <Fragment>
    <MetaData title="Confirm Order" />
    <div className="confirmOrderPage">
      <div>
        <div className="confirmshippingArea">
          <h1>User Info</h1>
          <div className="confirmshippingAreaBox">
            <div>
              <p>Name:</p>
              <span>{user.name}</span>
            </div>
            <div>
              <p>Phone:</p>
              <span>{shippingInfo.phoneNo}</span>
            </div>
            <div>
              <p>Address:</p>
              <span>{address}</span>
            </div>
          </div>
        </div>
        <div className="confirmCartItems">
          <h1>Job Manager Items :</h1>
          <div className="confirmCartItemsContainer">
            {apply.applyDetails &&
              apply.applyDetails.map((item) => (
                <div key={item.job}>
                  <img src={item.image} alt="Job" />
                  <Link to={`/job/${item.job}`}>
                    {item.name}
                  </Link>{" "}
                  <span>
                    
                    <b>{item.ctc}</b>
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <div className="orderSummary">
          <h1>Job Details</h1>
          <div>
          {cartItems &&
              cartItems.map((item) => (
                <div key={item.job}>
                  <img src={item.image} alt="Job" />
                
                <div>
                    <b>Title: </b>{item.name}
                    </div>
                {/* <div>
                    <b>Job Id: </b>{item._id}
                    </div> */}
                  <div>
                    
                    <b>Job ctc: </b>{item.ctc}
                  </div>
                  <div>
                    <b>Job description: </b>{item.description}
                  </div>
                  <div>
                    <b>Job Status: </b>{item.jobStatus}
                  </div>
                  <div>
                    <b>Start Date: </b>{item.startdate}
                  </div>
                </div>
              ))}
          </div>

          {/* <div className="orderSummaryTotal">
            <p>
              <b>Total:</b>
            </p>
            <span>₹{totalPrice}</span>
          </div> */}

          <button onClick={proceedToPayment}>Apply</button>
        </div>
      </div>
    </div>
  </Fragment>
  )
}

export default ConfirmApplyDetails
