import React, { useEffect } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Doughnut, Line } from "react-chartjs-2";
import MetaData from "../layout/Metadata";

import {
  getAdminProducts,
  getAllUsers,
  getAllOrders,
} from "../../features/admin/adminSlice";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { products, users, orders } = useSelector(
    (state) => state.adminReducer
  );

  const { user } = useSelector((state) => state.authReducer);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getAdminProducts());
    dispatch(getAllUsers());
    dispatch(getAllOrders());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  //   const lineState = {
  //     labels: ["Initial Amount", "Amount Earned"],
  //     datasets: [
  //       {
  //         label: "TOTAL AMOUNT",
  //         backgroundColor: ["tomato"],
  //         hoverBackgroundColor: ["rgb(197, 72, 49)"],
  //         data: [0, totalAmount],
  //       },
  //     ],
  //   };

  //   const doughnutState = {
  //     labels: ["Out of Stock", "InStock"],
  //     datasets: [
  //       {
  //         backgroundColor: ["#00A6B4", "#6800B4"],
  //         hoverBackgroundColor: ["#4B5000", "#35014F"],
  //         data: [outOfStock, products.length - outOfStock],
  //       },
  //     ],
  //   };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Admin Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <div class="flex-1 overflow-auto focus:outline-none">
          <div class="relative  flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
            <button
              type="button"
              class="px-4 border-r border-gray-200 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
            >
              <span class="sr-only">Open sidebar</span>
              <svg
                class="h-6 w-6"
                x-description="Heroicon name: outline/menu-alt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </button>
          </div>
          <main class="flex-1 relative pb-8 z-0 overflow-y-auto">
            {/* <!-- Page header --> */}
            <div class="bg-white shadow">
              <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
                <div class="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
                  <div class="flex-1 min-w-0">
                    {/* <!-- Profile --> */}
                    <div class="flex items-center">
                      <img
                        class="hidden h-16 w-16 rounded-full sm:block"
                        src={user?.avatar?.url}
                        alt={user.name}
                      />
                      <div>
                        <div class="flex items-center">
                          <img
                            class="h-16 w-16 rounded-full sm:hidden"
                            src={user?.avatar?.url}
                            alt={user.name}
                          />
                          <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                            Good morning, {user.name}
                          </h1>
                        </div>
                        <dl class="mt-6 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                          <dt class="sr-only">Account status</dt>
                          <dd class="mt-3 flex items-center text-sm text-gray-500 font-medium sm:mr-6 sm:mt-0 capitalize">
                            <svg
                              class="flex-shrink-0 mr-1.5 h-5 w-5 text-green-400"
                              x-description="Heroicon name: solid/check-circle"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                            Admin
                          </dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                    <Link to="/account">
                      <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        View Account
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-8">
              <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 class="text-lg leading-6 font-medium text-gray-900">
                  Overview
                </h2>
                <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {/* <!-- Card --> */}

                  <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-gray-400"
                            x-description="Heroicon name: outline/scale"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                          <dl>
                            <dt class="text-sm font-medium text-gray-500 truncate">
                              Total amount
                            </dt>
                            <dd>
                              <div class="text-lg font-bold text-gray-900">
                                ₹{totalAmount}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-gray-400"
                            x-description="Heroicon name: outline/scale"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                          <dl>
                            <dt class="text-sm font-medium text-gray-500 truncate">
                              Products
                            </dt>
                            <dd>
                              <div class="text-lg font-medium text-gray-900">
                                {products && products.length}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 hover:bg-gray-200 px-5 py-3">
                      <div class="text-sm">
                        <Link
                          to="/admin/products"
                          class="font-medium text-cyan-700 hover:text-cyan-900"
                        >
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-gray-400"
                            x-description="Heroicon name: outline/refresh"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                          <dl>
                            <dt class="text-sm font-medium text-gray-500 truncate">
                              Orders
                            </dt>
                            <dd>
                              <div class="text-lg font-medium text-gray-900">
                                {orders && orders.length}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 hover:bg-gray-200  px-5 py-3">
                      <div class="text-sm">
                        <Link
                          to="/admin/orders"
                          class="font-medium text-cyan-700 hover:text-cyan-900"
                        >
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div class="bg-white overflow-hidden shadow rounded-lg">
                    <div class="p-5">
                      <div class="flex items-center">
                        <div class="flex-shrink-0">
                          <svg
                            class="h-6 w-6 text-gray-400"
                            x-description="Heroicon name: outline/check-circle"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                        <div class="ml-5 w-0 flex-1">
                          <dl>
                            <dt class="text-sm font-medium text-gray-500 truncate">
                              Users
                            </dt>
                            <dd>
                              <div class="text-lg font-medium text-gray-900">
                                {users && users.length}
                              </div>
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div class="bg-gray-50 hover:bg-gray-200  px-5 py-3">
                      <div class="text-sm">
                        <Link
                          to="/admin/users"
                          class="font-medium text-cyan-700 hover:text-cyan-900"
                        >
                          {" "}
                          View all
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
