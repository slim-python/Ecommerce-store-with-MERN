import React, { Fragment, useEffect } from "react";
import { DataGrid } from "@material-ui/data-grid";
import "./productList.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SideBar from "./Sidebar";
import {
  getAllUsers,
  deleteUserById,
  clearErrors,
} from "../../features/admin/adminSlice";

const UsersList = ({ history }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();

  const { users, isUserDeleted } = useSelector((state) => state.adminReducer);

  //   const {
  //     error: deleteError,
  //     isDeleted,
  //     message,
  //   } = useSelector((state) => state.profile);

  const deleteUserHandler = (id) => {
    // dispatch(deleteUser(id));
    console.log("delete user with this id: ", id);
    dispatch(deleteUserById(id));
  };

  useEffect(() => {
    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    // if (deleteError) {
    //   alert.error(deleteError);
    //   dispatch(clearErrors());
    // }

    if (isUserDeleted) {
      alert.success("user has been deleted");
      navigate("/admin/users", { replace: true });
      dispatch(clearErrors());
    }

    dispatch(getAllUsers());
  }, [dispatch, isUserDeleted]);

  const columns = [
    { field: "id", headerName: "User ID", minWidth: 10, flex: 0.5 },

    {
      field: "email",
      headerName: "Email",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 80,
      flex: 0.4,
    },

    {
      field: "role",
      headerName: "Role",
      type: "number",
      minWidth: 150,
      flex: 0.3,
      cellClassName: (params) => {
        return params.getValue(params.id, "role") === "admin"
          ? "greenColor"
          : "redColor";
      },
    },

    {
      field: "actions",
      flex: 0.5,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/admin/user/${params.getValue(params.id, "id")}`}>
              <EditIcon />
            </Link>

            <Button
              onClick={() =>
                deleteUserHandler(params.getValue(params.id, "id"))
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

  users &&
    users.forEach((item) => {
      rows.push({
        id: item._id,
        role: item.role,
        email: item.email,
        name: item.name,
      });
    });

  return (
    <Fragment>
      <MetaData title={`ALL USERS - Admin`} />

      <div className="dashboard">
        <SideBar />
        <div className="productListContainer">
          <div>
            <h1 className="text-center text-xl lg:text-3xl font-bold text-gray-600 my-10">
              ALL USERS
            </h1>
          </div>

          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="productListTable"
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UsersList;
