import { 
    MY_APPLICATIONS_REQUEST,
    MY_APPLICATIONS_FAIL,
    MY_APPLICATIONS_SUCCESS ,
    CLEAR_ERRORS
} from "../constants/applyConstant";

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

  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };