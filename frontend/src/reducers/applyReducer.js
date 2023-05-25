import { APPLY } from "../constants/applyConstant";

export const applyReducer = (
    state = { cartItems: [], shippingInfo: {} },
    action
  ) => {
    switch (action.type) {
      case APPLY:
        const item = action.payload;
  
      default:
        return state;
    }
  };