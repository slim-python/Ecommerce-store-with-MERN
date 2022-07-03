import React, { useEffect, useState } from "react";
import logo from "../../../images/logo.png";
import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  let navStyleshow = "relative z-40 lg:hidden";
  let navStylehidden = "hidden z-40 lg:hidden";
  let toggleMenu = () => {
    setNavbarOpen(!navbarOpen);
  };
  const { isAuthenticated } = useSelector((state) => state.authReducer);
  const { cartItems } = useSelector((state) => state.cartReducer);

  let signInshow = isAuthenticated
    ? "hidden"
    : "hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6";
  return (
    <>
      <div className="bg-white">
        {/* mobile menu */}
        <div
          className={navbarOpen ? navStyleshow : navStylehidden}
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25"></div>

          <div className="fixed inset-0 flex z-40">
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link
                    to="/"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Home
                  </Link>
                </div>
                <div className="flow-root">
                  <Link
                    to="/products"
                    className="-m-2 p-2 block font-medium text-gray-900"
                  >
                    Products
                  </Link>
                </div>
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <Link to="/login" className={signInshow}>
                    Sign in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header className="relative bg-white">
          <p className="bg-pink-400 h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            Get free delivery on orders over ₹1000
          </p>

          <nav
            aria-label="Top"
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 "
          >
            <div className="border-b border-gray-200">
              <div className="h-16 flex items-center">
                <button
                  type="button"
                  onClick={toggleMenu}
                  className="bg-white p-2 rounded-md text-gray-400 lg:hidden"
                >
                  <span className="sr-only">Open menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <div className="ml-4 flex lg:ml-0">
                  <Link to="/">
                    <span className="sr-only">Workflow</span>
                    <p className="font-extrabold tracking-tight  text-xl lg:text-3xl text-gray-700">
                      Pixies.
                    </p>
                  </Link>
                </div>

                <div className="hidden lg:ml-8 lg:block lg:self-stretch">
                  <div className="h-full flex space-x-8">
                    <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                          aria-expanded="false"
                        >
                          {" "}
                          <Link to="/">Home</Link>
                        </button>
                      </div>

                      <div className="absolute top-full inset-x-0 text-sm text-gray-500">
                        <div
                          className="absolute inset-0 top-1/2 bg-white shadow"
                          aria-hidden="true"
                        ></div>

                        <div className="relative bg-white">
                          <div className="max-w-7xl mx-auto px-8"></div>
                        </div>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="relative flex">
                        <button
                          type="button"
                          className="border-transparent text-gray-700 hover:text-gray-800 relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px"
                          aria-expanded="false"
                        >
                          <Link to="/products">Products</Link>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-auto flex items-center">
                  <div className={signInshow}>
                    <Link
                      to="/login"
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Link>
                    <span
                      className="h-6 w-px bg-gray-200"
                      aria-hidden="true"
                    ></span>
                  </div>

                  <div className="flex lg:ml-3">
                    <Link
                      to="/search"
                      className="p-2 text-gray-400 hover:text-gray-500"
                    >
                      <span className="sr-only">Search</span>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </Link>
                  </div>

                  <div className="ml-4 flow-root lg:ml-6">
                    <Link
                      to="/carts/"
                      className="group -m-2 p-2 flex items-center"
                    >
                      <svg
                        className="flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                        />
                      </svg>
                      <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                        {isAuthenticated ? cartItems.length : 0}
                      </span>
                      <span className="sr-only">items in cart, view bag</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
