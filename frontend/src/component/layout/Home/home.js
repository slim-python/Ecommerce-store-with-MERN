import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/cg";
import "./Home.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import Metadata from "../Metadata";
import Loader from "../Loader/Loader";
import { Link } from "react-router-dom";
import {
  fetchAsyncProducts,
  getAllProducts,
  fetchAsyncProductDetails,
} from "../../../features/products/productSlice";

const Home = () => {
  const {
    loading,
    products: { products, productCount },
  } = useSelector(getAllProducts);

  const dispatch = useDispatch();
  useEffect(() => {
    let keyword = "";
    let currentPage = 1;
    let price = [0, 25000];
    dispatch(fetchAsyncProducts({ keyword, currentPage, price }));
  }, [dispatch]);
  return (
    <Fragment>
      {" "}
      {loading ? (
        <Loader />
      ) : (
        <>
          <Metadata title="Pixies - Online Ecommerce Store" />
          {/* promo section */}
          <div className="bg-white relative overflow-hidden">
            <div aria-hidden="true" className="absolute inset-0">
              <div className="absolute inset-0 max-w-7xl mx-auto overflow-hidden xl:px-8">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-sale-full-width.jpg"
                  alt=""
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-white bg-opacity-75"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white"></div>
            </div>

            <section
              aria-labelledby="sale-heading"
              className="relative max-w-7xl mx-auto pt-32 px-4 flex flex-col items-center text-center sm:px-6 lg:px-8 "
            >
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <h2
                  id="sale-heading"
                  className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl"
                >
                  Get 25% off during our one-time sale{" "}
                </h2>
                <p className="mt-4 max-w-xl mx-auto text-xl text-gray-600">
                  Most of our products are limited releases that won;t come
                  back. Get your favorite items while they&#039;re in stock.
                </p>
                <Link
                  to="/products"
                  className="mt-6 inline-block w-full bg-gray-900 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-gray-800 sm:w-auto"
                >
                  Get access to our one-time sale
                </Link>
              </div>
            </section>
            <section
              aria-labelledby="testimonial-heading"
              className="relative max-w-7xl mx-auto py-14 px-4 sm:px-6 lg:py-32 lg:px-8 "
            >
              <div className="max-w-2xl mx-auto lg:max-w-none">
                <h2
                  id="testimonial-heading"
                  className="text-2xl font-extrabold tracking-tight text-gray-900"
                >
                  What are people saying?
                </h2>

                <div className="mt-16 space-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
                  <blockquote className="sm:flex lg:block">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="flex-shrink-0 text-gray-300"
                    >
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        My order arrived super quickly. The product is even
                        better than I hoped it would be. Very happy customer
                        over here!
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Savita tuddo, Purnia
                      </cite>
                    </div>
                  </blockquote>

                  <blockquote className="sm:flex lg:block">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="flex-shrink-0 text-gray-300"
                    >
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        I had to return a purchase that didn’t fit. The whole
                        process was so simple that I ended up ordering two new
                        items!
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Subodh, Boring road
                      </cite>
                    </div>
                  </blockquote>

                  <blockquote className="sm:flex lg:block">
                    <svg
                      width="24"
                      height="18"
                      viewBox="0 0 24 18"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      className="flex-shrink-0 text-gray-300"
                    >
                      <path
                        d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <div className="mt-8 sm:mt-0 sm:ml-6 lg:mt-10 lg:ml-0">
                      <p className="text-lg text-gray-600">
                        Now that I’m on holiday for the summer, I’ll probably
                        order a few more shirts. It’s just so convenient, and I
                        know the quality will always be there.
                      </p>
                      <cite className="mt-4 block font-semibold not-italic text-gray-900">
                        Sudhandhu, Patna
                      </cite>
                    </div>
                  </blockquote>
                </div>
              </div>
            </section>
          </div>

          <h2 className="text-center font-thin text-3xl mb-6 ">
            Featured Products
          </h2>

          <div className="bg-white">
            <div className="max-w-2xl mx-auto py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
              <h2 className="sr-only">Products</h2>

              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                {products?.map((product, idx) => (
                  <ProductCard key={idx} product={product} />
                ))}
              </div>
            </div>
          </div>

          {/* policies */}
          <section
            aria-labelledby="policies-heading"
            className="mt-24 bg-gray-50 border-t border-gray-200"
          >
            <h2 id="policies-heading" className="sr-only">
              Our policies
            </h2>

            <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 sm:py-12 lg:px-8 ">
              <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-0">
                <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 h-24 w-auto mx-auto"
                        src="https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      Free returns
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      Not what you expected? Place it back in the parcel and
                      attach the pre-paid postage stamp.
                    </p>
                  </div>
                </div>

                <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 h-24 w-auto mx-auto"
                        src="https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      Same day delivery
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      We offer a delivery service that has never been done
                      before. Checkout today and receive your products within
                      hours.
                    </p>
                  </div>
                </div>

                <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 h-24 w-auto mx-auto"
                        src="https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      All year discount
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      Looking for a deal? You can use the code
                      &quot;ALLYEAR&quot; at checkout and get money off all year
                      round.
                    </p>
                  </div>
                </div>

                <div className="text-center md:flex md:items-start md:text-left lg:block lg:text-center">
                  <div className="md:flex-shrink-0">
                    <div className="flow-root">
                      <img
                        className="-my-1 h-24 w-auto mx-auto"
                        src="https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-4 lg:mt-6 lg:ml-0">
                    <h3 className="text-sm font-semibold tracking-wide uppercase text-gray-900">
                      For the planet
                    </h3>
                    <p className="mt-3 text-sm text-gray-500">
                      We’ve pledged 1% of sales to the preservation and
                      restoration of the natural environment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </Fragment>
  );
};

export default Home;
