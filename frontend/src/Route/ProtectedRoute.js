import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = (props) => {
  const { Component } = props;
  let navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.authReducer
  );
  useEffect(() => {
    if (isAuthenticated === false) {
      console.log("not authenticated");
      navigate("/login", { replace: true });
    }
  }, [isAuthenticated]);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
