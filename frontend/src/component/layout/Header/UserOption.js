import React, { Fragment, useState } from "react";
import "./Header.css";
import { SpeedDial, SpeedDialAction } from "@material-ui/lab";
import Backdrop from "@material-ui/core/Backdrop";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ListAltIcon from "@material-ui/icons/ListAlt";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../features/auth/authSlice";
import { useAlert } from "react-alert";
import "react-toastify/dist/ReactToastify.css";
const UserOption = ({ user }) => {
  let navigate = useNavigate();
  const alert = useAlert();
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  // console.log(
  //   "from usr option>> ",
  //   user,
  //   "also typeof user avatar url: ",
  //   typeof user.avatar.url,
  //   "ava: ",
  //   user.avatar.url
  // );

  const { cartItems } = useSelector((state) => state.cartReducer);

  // let cartItems = [1, 2, 4];

  const options = [
    { icon: <ListAltIcon />, name: "Orders", func: orders },
    { icon: <PersonIcon />, name: "Profile", func: account },
    {
      icon: (
        <ShoppingCartIcon
          style={{ color: cartItems.length > 0 ? "tomato" : "unset" }}
        />
      ),
      name: `Cart(${cartItems.length})`,
      func: cart,
    },
    { icon: <ExitToAppIcon />, name: "Logout", func: logoutUser },
  ];

  if (user.role === "admin") {
    options.unshift({
      icon: <DashboardIcon />,
      name: "Dashboard",
      func: dashboard,
    });
  }

  function dashboard() {
    navigate("/admin/dashboard", { replace: true });
  }

  function orders() {
    navigate("/orders", { replace: true });
  }
  function account() {
    navigate("/account", { replace: true });
  }
  function cart() {
    navigate("/carts", { replace: true });
  }
  function logoutUser() {
    dispatch(logout());
    alert.success("Logout Successfully");
  }

  // console.log("here is user: ", user);

  // if (user?.avatar?.url != undefined) {
  //   console.log("ye to undefined hai bhai");
  // }
  return (
    <Fragment>
      <Backdrop open={open} style={{ zIndex: "10" }} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        style={{ zIndex: "11" }}
        open={open}
        direction="down"
        className="speedDial"
        icon={
          <img
            className="speedDialIcon"
            src={user?.avatar?.url ? user.avatar.url : "/Profile.png"}
            alt="Profile"
          />
        }
      >
        {options.map((item) => (
          <SpeedDialAction
            key={item.name}
            icon={item.icon}
            tooltipTitle={item.name}
            onClick={item.func}
            tooltipOpen={window.innerWidth <= 600 ? true : false}
          />
        ))}
      </SpeedDial>
    </Fragment>
  );
};

export default UserOption;
