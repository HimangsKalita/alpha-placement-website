// import React, { Fragment } from "react";
// import { useSelector } from "react-redux";
// import MetaData from "../MetaData";
// import "./Apply.css";
// import { Link } from "react-router-dom";
// import { Typography } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";


// const Apply = () => {
//     const history=useNavigate();
//     const { applyItems } = useSelector((state) => state.Apply);

//     const { user } = useSelector((state) => state.user);
  
  
//     const proceedToPayment = () => {

//         // sessionStorage.setItem("applyInfo", JSON.stringify(data));
    
//         history("/applications");
//       };
  
//     return (
//       <Fragment>
//         <MetaData title="Apply" />
//         <div className="confirmOrderPage">
//           <div>
//             <div className="confirmshippingArea">
//               <Typography>Shipping Info</Typography>
//               <div className="confirmshippingAreaBox">
//                 <div>
//                   <p>Name:</p>
//                   <span>{user.name}</span>
//                 </div>
//               </div>
//             </div>
//             <div className="confirmCartItems">
//               <Typography>Your Cart Items:</Typography>
//               <div className="confirmCartItemsContainer">
//                 {applyItems &&
//                   applyItems.map((item) => (
//                     <div key={item.job}>
//                       <img src={item.images} alt="Job" />
//                       <Link to={`/job/${item.job}`}>
//                         {item.title}
//                       </Link>{" "}
//                     </div>
//                   ))}
//               </div>
//             </div>
//           </div>
//           {/*  */}
//           <div>
//             <div className="orderSummary">
//               <Typography>Order Summery</Typography>
              
  
//               <button onClick={proceedToPayment}>Proceed To Payment</button>
//             </div>
//           </div>
//         </div>
//       </Fragment>
//     );
//     }
  
//   export default Apply;