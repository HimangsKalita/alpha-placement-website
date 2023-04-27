import axios from "axios";

import {
    ALL_JOB_FAIL,
    ALL_JOB_REQUEST,
    ALL_JOB_SUCCESS,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_FAIL,
    JOB_DETAILS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/jobConstant"


export const getJob =(keyword="")=> async(dispatch)=>{
    try{
        dispatch({ type: ALL_JOB_REQUEST });

        const { data } = await axios.get(`/api/v1/jobs?keyword=${keyword}`);

        dispatch({
          type: ALL_JOB_SUCCESS,
          payload: data,
        });
    }catch(error){
    dispatch({
        type: ALL_JOB_FAIL,
        payload: error.response.data.message,
      });
    }
};

export const getJobDetails =(id)=> async(dispatch)=>{
  try{
      dispatch({ type: JOB_DETAILS_REQUEST });

      const { data } = await axios.get(`/api/v1/job/${id}`);

      dispatch({
        type: JOB_DETAILS_SUCCESS,
        payload: data.job,
      });
  }catch(error){
  dispatch({
      type: JOB_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };