import { 
    MY_APPLICATIONS_REQUEST,
    MY_APPLICATIONS_FAIL,
    MY_APPLICATIONS_SUCCESS,
    CLEAR_ERRORS 
} from "../constants/applyConstant";


export const myApplicationsReducer = (state = { orders: [] }, action) => {
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