import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./myApplications.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors,myApplications } from "../../actions/applicationAction";
import Loader from "../Loader";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../MetaData";
import LaunchIcon from "@material-ui/icons/Launch";

const MyApplications = () => {

    const dispatch = useDispatch();

  const alert = useAlert();

  const { loading, error, applications } = useSelector((state) => state.myApplications);
  const { user } = useSelector((state) => state.user);

  const columns=
  [
    { field: "id", headerName: "Application ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params) => {
        return params.getValue(params.id, "applicationStatustus") === "Selected"
          ? "greenColor"
          : "redColor";
      },
    },

    {
        field: "date",
        headerName: "Applied At",
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
          <Link to={`/application/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];
  const rows=[];

  applications &&
    applications.forEach((item, index) => {
      rows.push({
        // itemsQty: item.orderItems.length,
        id: item._id,
        status: item.applicationStatus,
        date: (item.appliedAt).substr(0,10),
        // {String(user.createdAt).substr(0, 10)}
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(myApplications());
  }, [dispatch, alert, error]);

  return (
    <Fragment>
    <MetaData title={`${user.name} - Applications`} />

    {loading ? (
      <Loader />
    ) : (
      <div className="myApplicationsPage">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          disableSelectionOnClick
          className="myApplicationsTable"
          autoHeight
        />

        <Typography class="myApplicationHeading">{user.name}'s Applications</Typography>
      </div>
    )}
  </Fragment>
  )
}

export default MyApplications
