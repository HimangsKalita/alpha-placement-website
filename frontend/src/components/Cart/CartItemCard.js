import React from "react";
import "./CartItemCard.css";
import { Link } from "react-router-dom";

const CartItemCard = ({ item, deleteCartItems }) => {
  return (
    <div className="CartItemCard">
      <img src={item.image} alt="ssa" />
      <div>
        <Link to={`/job/${item.job}`}>{item.name}</Link>
        <span>{`Description: ${item.description}`}</span>
        <span>{`CTC: ${item.ctc}`}</span>
        <span>{`Start Date: ${item.startdate}`}</span>
        <span>{`Job Status: ${item.jobStatus}`}</span>
        <p onClick={() => deleteCartItems(item.job)}>Remove</p>
      </div>
    </div>
  );
};

export default CartItemCard;