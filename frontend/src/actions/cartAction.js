import {
    ADD_TO_CART,
    REMOVE_CART_ITEM,
    SAVE_SHIPPING_INFO,
  } from "../constants/cartConstant";
  import axios from "axios";
  
  export const addItemsToCart = (id) => async (dispatch, getState) => {
    const { data } = await axios.get(`/api/v1/job/${id}`);
  
    dispatch({
      type: ADD_TO_CART,
      payload: {
        job: data.job._id,
        name: data.job.title,
        ctc: data.job.ctc,
        image: data.job.images[0].url,
        description:data.job.description,
        startdate:data.job.startdate,
        jobStatus:data.job.jobStatus,
      },
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const removeItemsFromCart = (id) => async (dispatch, getState) => {
    dispatch({
      type: REMOVE_CART_ITEM,
      payload: id,
    });
  
    localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
  };
  
  export const saveShippingInfo = (data) => async (dispatch) => {
    dispatch({
      type: SAVE_SHIPPING_INFO,
      payload: data,
    });
  
    localStorage.setItem("shippingInfo", JSON.stringify(data));
  };