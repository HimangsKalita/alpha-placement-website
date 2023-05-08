import { legacy_createStore as createStore,combineReducers, applyMiddleware } from "redux";
// import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { jobDetailReducer, jobsReducer } from "./reducers/jobReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";
import { myApplicationsReducer } from "./reducers/applyReducer";

const reducer = combineReducers({
    jobs: jobsReducer,
    jobDetails: jobDetailReducer,
    user: userReducer,
    profile: profileReducer,
  //   forgotPassword: forgotPasswordReducer,
  //   cart: cartReducer,
  //   newOrder: newOrderReducer,
    myApplications: myApplicationsReducer,
  //   orderDetails: orderDetailsReducer,
  //   newReview: newReviewReducer,
  //   newProduct: newProductReducer,
  //   product: productReducer,
  //   allOrders: allOrdersReducer,
  //   order: orderReducer,
  //   allUsers: allUsersReducer,
  //   userDetails: userDetailsReducer,
  //   productReviews: productReviewsReducer,
  //   review: reviewReducer,
  });

  let initialState = {
    cart: {
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
      shippingInfo: localStorage.getItem("shippingInfo")
        ? JSON.parse(localStorage.getItem("shippingInfo"))
        : {},
    },
  };

const middleware = [thunk];

const store = createStore (
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;