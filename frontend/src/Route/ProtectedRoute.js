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
      navigate("/login", { replace: true });
    }
  }, []);
  return (
    <div>
      <Component />
    </div>
  );
};

export default ProtectedRoute;
