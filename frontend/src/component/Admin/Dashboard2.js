import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Dashboard2 = () => {
  return (
    <Fragment>
      <div>
        <div class="relative h-screen flex overflow-hidden bg-gray-100">
          <div class="fixed inset-0 flex z-40 lg:hidden" aria-modal="true">
            <div
              class="fixed inset-0 bg-gray-600 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <div class="hidden relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                >
                  <span class="sr-only">Close sidebar</span>
                  <svg
                    class="h-6 w-6 text-white"
                    x-description="Heroicon name: outline/x"
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
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
              </div>

              <div class="flex-shrink-0 flex items-center px-4">
                <img
                  class="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                  alt="Easywire logo"
                />
              </div>
              <nav
                class="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div class="px-2 space-y-1">
                  <a
                    href="#"
                    class="bg-cyan-800 text-white group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                      x-description="Heroicon name: outline/home"
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
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      ></path>
                    </svg>
                    Home
                  </a>

                  <a
                    href="#"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
                  >
                    <svg
                      class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                      x-description="Heroicon name: outline/clock"
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    History
                  </a>

                  <a
                    href="#"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md bg-cyan-800 text-white text-cyan-100 hover:text-white hover:bg-cyan-600"
                  >
                    <svg
                      class="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
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
                    Balances
                  </a>

                  <a
                    href="#"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
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
                    Cards
                  </a>

                  <a
                    href="#"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
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
                    Recipients
                  </a>

                  <a
                    href="#"
                    class="text-cyan-100 hover:text-white hover:bg-cyan-600 group flex items-center px-2 py-2 text-base font-medium rounded-md"
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
                    Reports
                  </a>
                </div>
                <div class="mt-6 pt-6">
                  <div class="px-2 space-y-1">
                    <a
                      href="#"
                      class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <svg
                        class="mr-4 h-6 w-6 text-cyan-200"
                        x-description="Heroicon name: outline/cog"
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
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        ></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        ></path>
                      </svg>
                      Settings
                    </a>

                    <a
                      href="#"
                      class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <svg
                        class="mr-4 h-6 w-6 text-cyan-200"
                        x-description="Heroicon name: outline/question-mark-circle"
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
                          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      Help
                    </a>

                    <a
                      href="#"
                      class="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                    >
                      <svg
                        class="mr-4 h-6 w-6 text-cyan-200"
                        x-description="Heroicon name: outline/shield-check"
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
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        ></path>
                      </svg>
                      Privacy
                    </a>
                  </div>
                </div>
              </nav>
            </div>

            <div class="flex-shrink-0 w-14" aria-hidden="true">
              {/* <!-- Dummy element to force sidebar to shrink to fit close icon --> */}
            </div>
          </div>
          {/* <!-- Static sidebar for desktop --> */}
          <div class="hidden lg:flex lg:flex-shrink-0">
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
                    <a
                      href="#"
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
                    </a>

                    <a
                      href="#"
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
                    </a>
                    <ul id="dropdown-example" className="">
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

                    <a
                      href="#"
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
                    </a>

                    <a
                      href="#"
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
                    </a>

                    <a
                      href="#"
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
                      Reports
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>

          <div class="flex-1 overflow-auto focus:outline-none">
            <div class="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200 lg:border-none">
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
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.6&amp;w=256&amp;h=256&amp;q=80"
                          alt=""
                        />
                        <div>
                          <div class="flex items-center">
                            <img
                              class="h-16 w-16 rounded-full sm:hidden"
                              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2.6&amp;w=256&amp;h=256&amp;q=80"
                              alt=""
                            />
                            <h1 class="ml-3 text-2xl font-bold leading-7 text-gray-900 sm:leading-9 sm:truncate">
                              Good morning, Emilia Birch
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
                              Verified account
                            </dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                    <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                      <button
                        type="button"
                        class="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                      >
                        View Account
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-8">
                <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                  <h2 class="text-lg leading-6 font-medium text-gray-900">
                    Overview
                  </h2>
                  <div class="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
                                Products
                              </dt>
                              <dd>
                                <div class="text-lg font-medium text-gray-900">
                                  24
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-5 py-3">
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-cyan-700 hover:text-cyan-900"
                          >
                            View all
                          </a>
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
                                  10
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-5 py-3">
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-cyan-700 hover:text-cyan-900"
                          >
                            View all
                          </a>
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
                                User
                              </dt>
                              <dd>
                                <div class="text-lg font-medium text-gray-900">
                                  3
                                </div>
                              </dd>
                            </dl>
                          </div>
                        </div>
                      </div>
                      <div class="bg-gray-50 px-5 py-3">
                        <div class="text-sm">
                          <a
                            href="#"
                            class="font-medium text-cyan-700 hover:text-cyan-900"
                          >
                            View all
                          </a>
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
    </Fragment>
  );
};

export default Dashboard2;
