import React, { useState, useEffect } from "react";
import ErrorIcon from "@material-ui/icons/Error";
import "./NotFound.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncProducts,
  getAllProducts,
} from "../../../features/products/productSlice.js";
import ProductCard from "../Home/ProductCard";
const NotFound = () => {
  const {
    products: {
      products,
      productsCount,
      success,
      resultPerPage,
      filteredProductsCount,
    },
  } = useSelector(getAllProducts);

  const [category, setCategory] = useState("");

  const categories = [
    "laptop",
    "shirt",
    "Bottom",
    "Tops",
    "Attire",
    "Camera",
    "SmartPhones",
  ];

  return (
    <div className="">
      <div class="bg-white">
        <div>
          {/* mobile */}
          <div
            class="fixed inset-0 flex z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
          >
            <div
              class="fixed inset-0 bg-black bg-opacity-25"
              aria-hidden="true"
            ></div>

            <div class="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
              <div class="px-4 flex items-center justify-between">
                <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  class="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                >
                  <span class="sr-only">Close menu</span>
                  <svg
                    class="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form class="mt-4">
                <div class="border-t border-gray-200 pt-4 pb-4">
                  <fieldset>
                    <legend class="w-full px-2">
                      <button
                        type="button"
                        class="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                        aria-controls="filter-section-1"
                        aria-expanded="false"
                      >
                        <span class="text-sm font-medium text-gray-900">
                          Category
                        </span>
                        <span class="ml-6 h-7 flex items-center">
                          <svg
                            class="rotate-0 h-5 w-5 transform"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </span>
                      </button>
                    </legend>
                    <div class="pt-4 pb-2 px-4" id="filter-section-1">
                      <div class="space-y-6">
                        <div class="flex items-center">
                          <input
                            id="category-0-mobile"
                            name="category[]"
                            value="new-arrivals"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="category-0-mobile"
                            class="ml-3 text-sm text-gray-500"
                          >
                            All New Arrivals
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="category-1-mobile"
                            name="category[]"
                            value="tees"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="category-1-mobile"
                            class="ml-3 text-sm text-gray-500"
                          >
                            Tees
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="category-2-mobile"
                            name="category[]"
                            value="crewnecks"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="category-2-mobile"
                            class="ml-3 text-sm text-gray-500"
                          >
                            Crewnecks
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="category-3-mobile"
                            name="category[]"
                            value="sweatshirts"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="category-3-mobile"
                            class="ml-3 text-sm text-gray-500"
                          >
                            Sweatshirts
                          </label>
                        </div>

                        <div class="flex items-center">
                          <input
                            id="category-4-mobile"
                            name="category[]"
                            value="pants-shorts"
                            type="checkbox"
                            class="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500"
                          />
                          <label
                            for="category-4-mobile"
                            class="ml-3 text-sm text-gray-500"
                          >
                            Pants &amp; Shorts
                          </label>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </form>
            </div>
          </div>

          <main class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="border-b border-gray-200 pb-10">
              <h1 class="text-4xl font-extrabold tracking-tight text-gray-900">
                New Arrivals
              </h1>
              <p class="mt-4 text-base text-gray-500">
                Checkout out the latest release of Basic Tees, new and improved
                with four openings!
              </p>
            </div>

            <div class="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
              <aside>
                <h2 class="sr-only">Filters</h2>

                <button
                  type="button"
                  class="inline-flex items-center lg:hidden"
                >
                  <span class="text-sm font-medium text-gray-700">Filters</span>
                  <svg
                    class="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>

                <div class="hidden lg:block">
                  <form class="divide-y divide-gray-200 space-y-10">
                    <div class="pt-10">
                      <fieldset>
                        <legend class="block text-sm font-medium text-gray-900">
                          Category
                        </legend>
                        <div class="pt-6 space-y-3">
                          {categories.map((category) => (
                            <div
                              class="flex items-center"
                              key={category}
                              onClick={() => setCategory(category)}
                            >
                              <label
                                for="category-0"
                                class="ml-3 text-sm text-gray-600"
                              >
                                {category}
                              </label>
                            </div>
                          ))}
                        </div>
                      </fieldset>
                    </div>
                  </form>
                </div>
              </aside>

              <div class="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                <div class=" border-gray-200 rounded-lg h-96 lg:h-full">
                  <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                      <h2 className="sr-only">Products</h2>

                      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products?.map((product, idx) => (
                          <ProductCard key={idx} product={product} />
                        ))}
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

export default NotFound;
