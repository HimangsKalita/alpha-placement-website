import { 
    MY_APPLICATIONS_REQUEST,
    MY_APPLICATIONS_FAIL,
    MY_APPLICATIONS_SUCCESS,
    APPLICATION_DETAILS_REQUEST,
    APPLICATION_DETAILS_SUCCESS,
    APPLICATION_DETAILS_FAIL,
    CLEAR_ERRORS 
} from "../constants/applicationConstant";


export const myApplicationsReducer = (state = { applications: [] }, action) => {
    switch (action.type) {
      case MY_APPLICATIONS_REQUEST:
        return {
          loading: true,
        };
  
      case MY_APPLICATIONS_SUCCESS:
        return {
          loading: false,
          applications: action.payload,
        };
  
      case MY_APPLICATIONS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };

  export const applicationDetailsReducer = (state = { application: {} }, action) => {
    switch (action.type) {
      case APPLICATION_DETAILS_REQUEST:
        return {
          loading: true,
        };
  
      case APPLICATION_DETAILS_SUCCESS:
        return {
          loading: false,
          application: action.payload,
        };
  
      case APPLICATION_DETAILS_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
  
      default:
        return state;
    }
  };