import {
    ALL_JOB_FAIL,
    ALL_JOB_REQUEST,
    ALL_JOB_SUCCESS,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_FAIL,
    JOB_DETAILS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/jobConstant"


export const jobsReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        
        case ALL_JOB_REQUEST:
          return {
            loading: true,
            jobs: [],
          };
          case ALL_JOB_SUCCESS:
            return {
              loading: false,
              jobs: action.payload.jobs,
              jobsCount: action.payload.jobsCount,
              // resultPerPage: action.payload.resultPerPage,
              // filteredProductsCount: action.payload.filteredProductsCount,
            };

        case ALL_JOB_FAIL:
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

export const jobDetailReducer = (state = { job: {} }, action) => {
  switch (action.type) {
      
      case JOB_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
        case JOB_DETAILS_SUCCESS:
          return {
            loading: false,
            job: action.payload,
            
          };

      case JOB_DETAILS_FAIL:
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