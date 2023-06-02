import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./jobList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
// import MetaData from "../";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  deleteApplication,
  getAllApplications,
  clearErrors,
} from "../../actions/applicationAction";
import { DELETE_APPLICATION_RESET } from "../../constants/applicationConstant";

const ApplicationList = () => {
    const history=useNavigate();
  const dispatch = useDispatch();

  const alert = useAlert();

  const { error, applications } = useSelector((state) => state.allApplications);

  const { error: deleteError, isDeleted } = useSelector((state) => state.application);

  const deleteOrderHandler = (id) => {
    dispatch(deleteApplication(id));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (deleteError) {
      alert.error(deleteError);
      dispatch(clearErrors());
    }

    if (isDeleted) {
      alert.success("Applcation Deleted Successfully");
      history("/company/applications");
      dispatch({ type: DELETE_APPLICATION_RESET });
    }

    dispatch(getAllApplications());
  }, [dispatch, alert, error, deleteError,history, isDeleted]);

  const columns = [
    { field: "id", headerName: "Application ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "status") === "Selected"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "ctc",
      headerName: "CTC",
      type: "String",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/company/application/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteOrderHandler(params.getValue(params.id, "id"))
              }
            >
              <DeleteIcon />
            </Button>
          </Fragment>
        );
      },
    },
  ];

  const rows = [];
  console.log("Test")
  applications &&
  applications.forEach((item) => {
      rows.push({
        // id: item._id,
        // itemsQty: item.orderItems.length,
        // ctc: item.applyDetails[0].ctc,
        // status: item.applicationStatus,

        id:"647968f30e2adc9f09701196",
        status:"Received",
        ctc:"22lpa",
        

      });
    });

  return (
    <Fragment>
      {/* <MetaData title={`ALL ORDERS - Admin`} /> */}

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL APPLICATIONS</h1>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
            autoHeight
          />
        </div>
      </div>
    </Fragment>
  );
};

export default ApplicationList;
