import React, { Fragment, useState } from "react";
import "./ConfirmApply.css";
import { useSelector,useDispatch } from "react-redux";
import { saveShippingInfo } from "../../actions/cartAction";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";
import MetaData from "../MetaData";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
const Shipping = () => {
    const dispatch = useDispatch();
    const history=useNavigate()
    const alert = useAlert();
    const {shippingInfo, cartItems } = useSelector((state) => state.cart);
    const { user } = useSelector((state) => state.user);

    // const [files, setfiles] = useState(shippingInfo.files);
    const [resume, setResume] = useState(shippingInfo.resume);
    const [resumePreview, setResumePreview] = useState("/Profile.png");

    const shippingSubmit = (e) => {
        dispatch(
            saveShippingInfo({resume })
          );
          history("/apply");
        }

    const registerDataChange = (e) => {
          const reader = new FileReader();
    
          reader.onload = () => {
            if (reader.readyState === 2) {
              setResumePreview(reader.result);
              setResume(reader.result);
            }
          };
    
          reader.readAsDataURL(e.target.files[0]);
      };

  return (
    <Fragment>
     <div className="shippingContainer">
     <div className="shippingBox">
          <h2 className="shippingHeading">Shipping Details</h2>
          <form
            className="shippingForm"
            encType="multipart/form-data"
            onSubmit={shippingSubmit}
          >
            <div>
              <img src={resumePreview} alt="Resume Preview" />
              <input
                type="file"
                placeholder="Resume"
                required
                // value={resume}
                onChange={registerDataChange}/>
            <input
              type="submit"
              value="Continue"
              className="shippingBtn"
            />
            </div>

            </form>
            </div>
            </div>



    <div className="confirmCartItems">
            <Typography>Your Cart Items:</Typography>
            <div className="confirmCartItemsContainer">
              {cartItems &&
                cartItems.map((item) => (
                  <div key={item.job}>
                    <img src={item.image} alt="Product" />
                    <Link to={`/product/${item.job}`}>
                      {item.name}
                    </Link>{" "}
                    
                  </div>
                ))}
                </div>
                </div>

    </Fragment>
  )
}

export default Shipping
