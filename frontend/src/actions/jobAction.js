import axios from "axios";

import {
    ALL_JOB_FAIL,
    ALL_JOB_REQUEST,
    ALL_JOB_SUCCESS,
    ADMIN_JOB_REQUEST,
    ADMIN_JOB_FAIL,
    ADMIN_JOB_SUCCESS,
    NEW_JOB_REQUEST,
    NEW_JOB_SUCCESS,
    NEW_JOB_FAIL,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_FAIL,
    JOB_DETAILS_SUCCESS,
    CLEAR_ERRORS,
    COMPANY_JOB_SUCCESS,
    COMPANY_JOB_FAIL
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

export const getAdminJob = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_JOB_REQUEST });

    const { data } = await axios.get("/api/v1/admin/jobs");

    dispatch({
      type: ADMIN_JOB_SUCCESS,
      payload: data.jobs,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getCompanyJob = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_JOB_SUCCESS });

    const { data } = await axios.get("/api/v1/company/jobs");

    dispatch({
      type: COMPANY_JOB_SUCCESS,
      payload: data.jobs,
    });
  } catch (error) {
    dispatch({
      type: COMPANY_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const createJob = (jobData) => async (dispatch) => {
  try {
    dispatch({ type: NEW_JOB_REQUEST });

    const config = {
      headers: { "Content-Type": "application/json" },
    };

    const { data } = await axios.post(
      `/api/v1/company/job/new`,
      jobData,
      config
    );

    dispatch({
      type: NEW_JOB_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_JOB_FAIL,
      payload: error.response.data.message,
    });
  }
}

export const deleteJob = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_JOB_REQUEST });

    const { data } = await axios.delete(`/api/v1/company/job/${id}`);

    dispatch({
      type: DELETE_JOB_SUCCESS,
      payload: data.success,
    });
  } catch (error) {
    dispatch({
      type: DELETE_JOB_FAIL,
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