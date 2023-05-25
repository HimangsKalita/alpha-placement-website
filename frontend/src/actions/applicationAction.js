import { 
    MY_APPLICATIONS_REQUEST,
    MY_APPLICATIONS_FAIL,
    MY_APPLICATIONS_SUCCESS ,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    CLEAR_ERRORS
} from "../constants/applicationConstant";

import axios from "axios";

export const myApplications = () => async (dispatch) => {
    try {
      dispatch({ type: MY_APPLICATIONS_REQUEST });
  
      const { data } = await axios.get("/api/v1/applications/me");
  
      dispatch({ type: MY_APPLICATIONS_SUCCESS, payload: data.applications });
    } catch (error) {
      dispatch({
        type: MY_APPLICATIONS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getApplicationDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: APPLICATION_DETAILS_REQUEST });
  
      const { data } = await axios.get(`/api/v1/application/${id}`);
  
      dispatch({ type: APPLICATION_DETAILS_SUCCESS, payload: data.application });
    } catch (error) {
      dispatch({
        type: APPLICATION_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };