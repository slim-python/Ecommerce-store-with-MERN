import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [checked, setChecked] = useState(true);
  let toggleProductStyle = checked ? "hidden py-2 space-y-2" : "py-2 space-y-2";
  let toggleProducts = () => setChecked((value) => !value);
  return (
    // <aside className="w-64" aria-label="Sidebar">
    //   <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-200">
    //     <ul className="space-y-2">
    //       <li>
    //         <Link
    //           to="/admin/dashboard"
    //           className="flex items-center p-2 text-base font-normal text-gray-600 rounded-lg dark:text-gray-600 hover:font-bold dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
    //             <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
    //           </svg>
    //           <span className="ml-3">Dashboard</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <button
    //           onClick={toggleProducts}
    //           type="button"
    //           className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:font-bold dark:text-gray-600 dark:hover:bg-gray-700"
    //           aria-controls="dropdown-example"
    //           data-collapse-toggle="dropdown-example"
    //         >
    //           <svg
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75  dark:text-gray-400 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span
    //             className="flex-1 ml-3 text-left whitespace-nowrap"
    //             sidebar-toggle-item=""
    //           >
    //             Products
    //           </span>
    //           <svg
    //             sidebar-toggle-item=""
    //             className="w-6 h-6"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //         </button>
    //         <ul id="dropdown-example" className={toggleProductStyle}>
    //           <li>
    //             <Link
    //               to="/admin/products"
    //               className="flex items-center p-2 pl-11 w-full text-base
    //               font-normal text-gray-900 rounded-lg transition duration-75
    //               group hover:bg-gray-700 dark:text-gray-900
    //               dark:hover:text-white"
    //             >
    //               {" "}
    //               All Products
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/admin/product"
    //               className="flex items-center p-2 pl-11 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-700 dark:text-gray-900 dark:hover:text-white"
    //             >
    //               Create new
    //             </Link>
    //           </li>
    //         </ul>
    //       </li>

    //       <li>
    //         <Link
    //           to="/admin/orders"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:font-bold dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Orders</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/admin/users"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:font-bold dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/admin/reviews"
    //           className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-gray-900 hover:font-bold dark:hover:bg-gray-700"
    //         >
    //           <svg
    //             className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
    //             fill="currentColor"
    //             viewBox="0 0 20 20"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               fillRule="evenodd"
    //               d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
    //               clipRule="evenodd"
    //             ></path>
    //           </svg>
    //           <span className="flex-1 ml-3 whitespace-nowrap">Reviews</span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </div>
    // </aside>
    <aside>
      <div class="hidden lg:flex lg:flex-shrink-0 h-screen">
        <div class="flex flex-col w-64">
          {/* <!-- Sidebar component, swap this element with another sidebar if you like --> */}
          <div class="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
            <div class="flex items-center flex-shrink-0 px-4">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <p className="font-extrabold tracking-tight  text-xl lg:text-3xl text-gray-300">
                  Pixies.
                </p>
              </Link>
            </div>
            <nav
              class="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <Link
                  to="/admin/dashboard"
                  class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <svg
                    className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                    <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                  </svg>
                  Dashboard
                </Link>

                <button onClick={toggleProducts} type="button">
                  <Link
                    to="/admin/products"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                  >
                    <svg
                      class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Products
                    <svg
                      sidebar-toggle-item=""
                      className="w-6 h-6 ml-24"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </Link>
                </button>
                <ul id="dropdown-example" className={toggleProductStyle}>
                  <li>
                    <Link
                      to="/admin/products"
                      className="flex items-center p-2 pl-11 w-full text-base
                  font-normal  rounded-lg transition duration-75
                  group  dark:text-gray-900
                  dark:hover:text-white text-cyan-100 hover:text-white hover:bg-cyan-600 text-sm leading-6 font-medium rounded-md"
                    >
                      {" "}
                      All Products
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/admin/product"
                      className="flex items-center p-2 pl-11 w-full text-base
                          font-normal  rounded-lg transition duration-75
                          group  dark:text-gray-900
                          dark:hover:text-white text-cyan-100 hover:text-white hover:bg-cyan-600 text-sm leading-6 font-medium rounded-md"
                    >
                      Create new
                    </Link>
                  </li>
                </ul>

                <Link
                  to="/admin/orders"
                  class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    x-description="Heroicon name: outline/credit-card"
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
                      d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                    ></path>
                  </svg>
                  Orders
                </Link>

                <Link
                  to="/admin/users"
                  class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    x-description="Heroicon name: outline/user-group"
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
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                  Users
                </Link>

                <Link
                  to="/admin/reviews"
                  class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                >
                  <svg
                    class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                    x-description="Heroicon name: outline/document-report"
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
                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  Reviews
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
