import React, { Fragment, useEffect, useState } from "react";
// import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../../layout/Home/ProductCard";
import MetaData from "../../layout/Metadata";
import Loader from "../../layout/Loader/Loader";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import Typography from "@material-ui/core/Typography";
import { Slider } from "@material-ui/core";
import {
  fetchAsyncProducts,
  getAllProducts,
} from "../../../features/products/productSlice";
const categories = [
  "Packaged Food",
  "Dry Fruits",
  "Grocery",
  "Kitchen itmes",
  "Breakfast items",
  "Fresh Juice",
];

const Products = () => {
  const [filterpageOpen, setfilterpageOpen] = useState(false);
  let filterpageStyleshow = "fixed inset-0 flex z-40 lg:hidden";
  let filterpageStylehidden = "fixed inset-0 hidden z-40 lg:hidden";
  let toggleMenu = () => {
    setfilterpageOpen(!filterpageOpen);
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 5000]);
  const [category, setCategory] = useState("Grocery");

  const [ratings, setRatings] = useState(0);
  let { keyword } = useParams();
  const dispatch = useDispatch();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };

  const {
    products: {
      products,
      productsCount,
      success,
      resultPerPage,
      filteredProductsCount,
    },
  } = useSelector(getAllProducts);

  useEffect(() => {
    if (keyword == undefined) keyword = "";
    dispatch(
      fetchAsyncProducts({ keyword, currentPage, price, category, ratings })
    );
  }, [dispatch, keyword, currentPage, price, category, ratings]);

  let count = filteredProductsCount;

  return (
    <Fragment>
      {success ? (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />

          <div className="block">
            <div className="bg-white">
              <div>
                {/* mobile */}
                <div
                  className={
                    filterpageOpen ? filterpageStyleshow : filterpageStylehidden
                  }
                  role="dialog"
                  aria-modal="true"
                >
                  <div
                    className="fixed inset-0 bg-black bg-opacity-25"
                    aria-hidden="true"
                  ></div>

                  <div className="ml-auto relative max-w-xs w-full h-full bg-white shadow-xl py-4 pb-6 flex flex-col overflow-y-auto">
                    <div className="px-4 flex items-center justify-between">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        onClick={toggleMenu}
                        type="button"
                        className="-mr-2 w-10 h-10 p-2 flex items-center justify-center text-gray-400 hover:text-gray-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="h-6 w-6"
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
                          />
                        </svg>
                      </button>
                    </div>

                    <form className="mt-4">
                      <div className="border-t border-gray-200 pt-4 pb-4">
                        <fieldset>
                          <legend className="w-full px-2">
                            <button
                              type="button"
                              className="w-full p-2 flex items-center justify-between text-gray-400 hover:text-gray-500"
                              aria-controls="filter-section-1"
                              aria-expanded="false"
                            >
                              <span className="text-sm font-medium text-gray-900">
                                Category
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <svg
                                  className="rotate-0 h-5 w-5 transform"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  aria-hidden="true"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            </button>
                          </legend>
                          <div className="pt-4 pb-2 px-4" id="filter-section-1">
                            <div className="space-y-6">
                              {categories.map((category) => (
                                <div
                                  className="flex items-center"
                                  key={category}
                                  onClick={() => setCategory(category)}
                                >
                                  <label
                                    htmlFor="category-0"
                                    className="ml-3 text-sm text-gray-600 hover:text-indigo-400 hover:font-semibold"
                                  >
                                    {category}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </form>
                  </div>
                </div>

                <main className="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div class="relative bg-gray-800">
                    <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
                      <img
                        class="w-full h-full object-cover opacity-40"
                        src="https://pnptc-media.s3.amazonaws.com/images/header_photo.2e16d0ba.fill-600x400.jpg"
                        alt=""
                      />
                    </div>
                    <div class="relative max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                      <div class="md:ml-auto md:w-1/2 md:pl-10">
                        <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
                          Pixies / Grocery
                        </h2>
                        <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
                          Now Groceries are avilable too
                        </p>
                        <p class="mt-3 text-lg text-gray-300">
                          Whether you work from home or office or other
                          workplaces, daily grocery items are a requisite for
                          everybody. Regardless of the size of the family or
                          where you live, one can easily browse for the required
                          food or other daily use products and have them brought
                          to your home.{" "}
                        </p>
                        <div class="mt-8">
                          <div class="inline-flex rounded-md shadow">
                            <a
                              href="#grocery"
                              class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50"
                            >
                              View here
                              <svg
                                class="-mr-1 ml-3 h-5 w-5 text-gray-400"
                                x-description="Heroicon name: solid/external-link"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                              >
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"></path>
                              </svg>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-12 lg:grid lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
                    <aside>
                      <h2 className="sr-only">Filters</h2>

                      <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center lg:hidden"
                      >
                        <span className="text-sm font-medium text-gray-700">
                          Filters
                        </span>
                        <svg
                          className="flex-shrink-0 ml-1 h-5 w-5 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>

                      <div className="hidden lg:block" id="grocery">
                        <form className="divide-y divide-gray-200 space-y-10">
                          <div className="pt-10">
                            <fieldset>
                              <legend className="block text-sm font-medium text-gray-900">
                                Category
                              </legend>
                              <div className="pt-6 space-y-3">
                                {categories.map((category) => (
                                  <div
                                    className="flex items-center"
                                    key={category}
                                    onClick={() => setCategory(category)}
                                  >
                                    <label
                                      htmlFor="category-0"
                                      className="ml-3 text-sm text-gray-600 hover:text-indigo-400 hover:font-semibold"
                                    >
                                      {category}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </fieldset>
                            <fieldset className="mt-8 border px-4">
                              <Typography>Price</Typography>
                              <Slider
                                value={price}
                                onChange={priceHandler}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                min={0}
                                max={25000}
                              />
                            </fieldset>
                            <fieldset className="mt-8 border px-4">
                              <Typography component="legend">
                                Ratings Above
                              </Typography>
                              <Slider
                                value={ratings}
                                onChange={(e, newRating) => {
                                  setRatings(newRating);
                                }}
                                aria-labelledby="continuous-slider"
                                valueLabelDisplay="auto"
                                min={0}
                                max={5}
                              />
                            </fieldset>
                          </div>
                        </form>
                      </div>
                    </aside>

                    <div className="mt-6 lg:mt-0 lg:col-span-2 xl:col-span-3">
                      <div className=" border-gray-200 rounded-lg h-96 lg:h-full">
                        <div className="bg-white">
                          <div className="max-w-2xl mx-auto py-16 px-4 sm:py-4 sm:px-6 lg:max-w-7xl lg:px-8">
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

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClassName="page-item"
                linkClassName="page-link"
                activeClassName="pageItemActive"
                activeLinkClassName="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default Products;
