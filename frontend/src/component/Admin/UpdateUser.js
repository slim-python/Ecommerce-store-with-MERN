import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/Metadata";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PersonIcon from "@material-ui/icons/Person";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SideBar from "./Sidebar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  UpdateUserRoleById,
  getUserDetailsById,
  clearErrors,
} from "../../features/admin/adminSlice";
// import {
//   getUserDetails,
//   updateUser,
//   clearErrors,
// } from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";

const UpdateUser = ({ history, match }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const alert = useAlert();

  const { isUserRoleUpdated, user } = useSelector(
    (state) => state.adminReducer
  );

  //   const {
  //     loading: updateLoading,
  //     error: updateError,
  //     isUserRoleUpdated,
  //   } = useSelector((state) => state.profile);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  //   const userId = match.params.id;
  const { id } = useParams();

  useEffect(() => {
    // if (user && user._id !== id) {
    //   dispatch(getUserDetailsById(id));
    // } else {
    //   setName(user.name);
    //   setEmail(user.email);
    //   setRole(user.role);
    // }

    if (user) {
      setName(user.name);
      setEmail(user.email);
      setRole(user.role);
    } else {
      dispatch(getUserDetailsById(id));
    }

    // if (error) {
    //   alert.error(error);
    //   dispatch(clearErrors());
    // }

    // if (updateError) {
    //   alert.error(updateError);
    //   dispatch(clearErrors());
    // }

    if (isUserRoleUpdated) {
      alert.success("User Updated Successfully");
      navigate("/admin/users", { replace: true });
      dispatch(clearErrors());
    }
  }, [dispatch, alert, isUserRoleUpdated, user, id]);

  const updateUserSubmitHandler = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("role", role);

    // dispatch(updateUser(userId, myForm));
    dispatch(UpdateUserRoleById({ id, myForm }));
  };

  return (
    <Fragment>
      <MetaData title="Update User" />
      <div className="dashboard">
        <SideBar />
        <div className="newProductContainer">
          {false ? (
            <Loader />
          ) : (
            <form
              className="createProductForm"
              onSubmit={updateUserSubmitHandler}
            >
              <h1 className="text-center text-xl lg:text-3xl font-bold text-gray-600 my-10">
                Update User
              </h1>

              <div>
                <PersonIcon />
                <input
                  type="text"
                  placeholder="Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <MailOutlineIcon />
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <VerifiedUserIcon />
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                  <option value="">Choose Role</option>
                  <option value="admin">Admin</option>
                  <option value="user">User</option>
                </select>
              </div>

              <Button
                id="createProductBtn"
                type="submit"
                // disabled={
                //   updateLoading ? true : false || role === "" ? true : false
                // }
              >
                Update
              </Button>
            </form>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateUser;
