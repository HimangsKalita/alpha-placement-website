import {
    ALL_JOB_FAIL,
    ALL_JOB_REQUEST,
    ALL_JOB_SUCCESS,
    ADMIN_JOB_REQUEST,
    ADMIN_JOB_FAIL,
    COMPANY_JOB_SUCCESS,
    COMPANY_JOB_REQUEST,
    NEW_JOB_REQUEST,
    NEW_JOB_SUCCESS,
    NEW_JOB_FAIL,
    NEW_JOB_RESET,
    DELETE_JOB_REQUEST,
    DELETE_JOB_SUCCESS,
    DELETE_JOB_FAIL,
    DELETE_JOB_RESET,
    ADMIN_JOB_SUCCESS,
    COMPANY_JOB_FAIL,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_FAIL,
    JOB_DETAILS_SUCCESS,
    CLEAR_ERRORS,
} from "../constants/jobConstant"


export const jobsReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
        
        case ALL_JOB_REQUEST:
          case ADMIN_JOB_REQUEST:
          case COMPANY_JOB_REQUEST:
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
            case ADMIN_JOB_SUCCESS:
            case COMPANY_JOB_SUCCESS:
            return {
              loading: false,
              jobs: action.payload,
      };

        case ALL_JOB_FAIL:
          case ADMIN_JOB_FAIL:
          case COMPANY_JOB_FAIL:
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

export const newJobReducer = (state = { job: {} }, action) => {
  switch (action.type) {
    case NEW_JOB_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case NEW_JOB_SUCCESS:
      return {
        loading: false,
        success: action.payload.success,
        job: action.payload.product,
      };
    case NEW_JOB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case NEW_JOB_RESET:
      return {
        ...state,
        success: false,
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

export const jobReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_JOB_REQUEST:
    
      return {
        ...state,
        loading: true,
      };
    case DELETE_JOB_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload,
      };
    case DELETE_JOB_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DELETE_JOB_RESET:
      return {
        ...state,
        isDeleted: false,
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