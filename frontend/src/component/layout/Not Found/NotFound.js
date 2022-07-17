import React, { Fragment, useEffect } from "react";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <Fragment>
      <div>
        <div class="bg-white">
          <div class="min-h-screen bg-white px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div class="mx-auto max-w-max text-center">
              <main class="sm:flex">
                <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                  404
                </p>
                <div class="sm:ml-6">
                  <div class="sm:border-l sm:border-gray-200 sm:pl-6">
                    <h1 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                      Page not found
                    </h1>
                    <p class="mt-1 text-base text-gray-500 mt-4">
                      Please check the URL in the address bar and try again.
                    </p>
                  </div>
                  <div class="mt-10 flex space-x-3 pl-28 text-center sm:border-l sm:border-transparent sm:pl-6">
                    <Link
                      to="/"
                      class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      {" "}
                      Go back home{" "}
                    </Link>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
