import React, { useEffect } from "react";
import { loadUser } from "../../../features/auth/authSlice";
import { useSelector, useDispatch } from "react-redux";

const NotFound = () => {
  return (
    <div>
      NotFound
      <button>clcik</button>
    </div>
  );
};

export default NotFound;
