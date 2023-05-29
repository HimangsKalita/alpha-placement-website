import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard.js";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToCart,removeItemsFromCart} from "../../actions/cartAction";
import { useNavigate } from "react-router-dom";
import { Typography } from "@material-ui/core";
import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link } from "react-router-dom";

const Cart = () => {

  const dispatch = useDispatch();
  const history = useNavigate();
  const { cartItems } = useSelector((state) => state.cart);
  
    const deleteCartItems = (id) => {
      dispatch(removeItemsFromCart(id));
    };
  
    const checkoutHandler = () => {
      history("/apply");
    };

  return (
    <Fragment>
      {cartItems.length === 0 ? (
        <div className="emptyCart">
          <RemoveShoppingCartIcon />

          <Typography>You have not selected any Job</Typography>
          <Link to="/jobs">View Jobs</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Job</p>
              {/* <p>Quantity</p> */}
              <p>CTC (lpa)</p>
            </div>

            {cartItems &&
              cartItems.map((item) => (
                <div className="cartContainer" key={item.job}>
                  <CartItemCard item={item} deleteCartItems={deleteCartItems} />
                  <p className="cartSubtotal">{
                    item.ctc
                  }</p>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Proceed to apply</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  )
}

export default Cart
