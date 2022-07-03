import React from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import "./orderSuccess.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const OrderSuccess = () => {
  return (
    <div>
      <div class="bg-white">
        <div class="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div class="max-w-xl">
            <h1 class="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Thank you!
            </h1>
            <p class="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              It&#039;s on the way!
            </p>
            <p class="mt-2 text-base text-gray-500">
              Your order #14034056 has been placed and will be shipped soon.
            </p>
            <Link to="/orders">
              <div className="mt-10 w-60 curser-pointer">
                <div className="flex space-around w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">
                  View your Orders{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-12"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
