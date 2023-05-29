import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./jobList.css";
import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getAdminJob,
  deleteJob,
} from "../../actions/jobAction";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../MetaData";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { DELETE_JOB_RESET } from "../../constants/jobConstant";
import { useNavigate } from "react-router-dom";
import Sidebar2 from "./Sidebar2";
// import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const JobList2 = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const alert = useAlert();

  const { error, jobs } = useSelector((state) => state.jobs);

  const { error: deleteError, isDeleted } = useSelector(
    (state) => state.job
  );

  const deleteJobHandler = (id) => {
    dispatch(deleteJob(id));
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
      alert.success("Job Deleted Successfully");
      history("/admin/dashboard2");
      dispatch({ type: DELETE_JOB_RESET });
    }

    dispatch(getAdminJob());
  }, [dispatch, alert, error,deleteError,history,isDeleted]);

  const columns = [
    { field: "id", headerName: "Job ID", minWidth: 200, flex: 0.5 },

    {
      field: "name",
      headerName: "Name",
      minWidth: 350,
      flex: 1,
    },
    // {
    //   field: "stock",
    //   headerName: "Stock",
    //   type: "number",
    //   minWidth: 150,
    //   flex: 0.3,
    // },

    {
      field: "ctc",
      headerName: "CTC",
      type: "number",
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

            <Button
              onClick={() =>
                deleteJobHandler(params.getValue(params.id, "id"))
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

  jobs &&
    jobs.forEach((item) => {
      rows.push({
        id: item._id,
        // stock: item.Stock,
        ctc: item.ctc,
        name: item.title,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL JOBS - Admin`} />

      <div className="dashboard">
        <Sidebar2 />
        <div className="productListContainer">
          <h1 id="productListHeading">ALL JOBS</h1>

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

export default JobList2;