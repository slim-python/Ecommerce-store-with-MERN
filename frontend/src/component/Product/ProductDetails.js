import React, { Fragment, useEffect, useState } from "react";
import "./ProductDetails.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncProductDetails } from "../../features/products/productSlice";
import ReviewCard from "./ReviewCard.js";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import ReactStars from "react-rating-stars-component";
import { addItemsToCart } from "../../features/cart/cartSlice";
import MetaData from "../layout/Metadata";
import { useParams } from "react-router-dom";
import { newReview, clearErrors } from "../../features/review/reviewSlice";
import { Rating } from "@material-ui/lab";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
} from "@material-ui/core";
const ProductDetails = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  let { id } = useParams();
  let arr = [1, 2, 3, 4];

  const { product, success } = useSelector(
    (state) => state.productReducer.productDetails
  );

  const { Reviewsuccess } = useSelector((state) => state.reviewReducer);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    value: Number(3.5),
    isHalf: true,
    activeColor: "tomato",
    size: window.innerWidth < 600 ? 15 : 20,
  };

  const [quantity, setQuantity] = useState(1);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const increaseQuantity = () => {
    if (product.Stock <= quantity) return;
    const qty = quantity + 1;
    setQuantity(qty);
  };

  const decreaseQuantity = () => {
    if (1 >= quantity) return;

    const qty = quantity - 1;
    setQuantity(qty);
  };

  const addToCartHandler = () => {
    dispatch(addItemsToCart({ id, quantity }));
    alert.success("Item Added To Cart");
  };

  const submitReviewToggle = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const reviewSubmitHandler = () => {
    const myForm = new FormData();

    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);
    console.log("here is ", myForm);
    dispatch(newReview(myForm));
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchAsyncProductDetails(id));
    if (Reviewsuccess) {
      alert.success("Review Submitted Successfully");
      dispatch(clearErrors());
    }
  }, [dispatch, id, Reviewsuccess]);

  return (
    <Fragment>
      {success ? (
        <Fragment>
          <MetaData title={`${product.name} -- ECOMMERCE`} />

          <main className="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 mt-20">
            <div className="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-5 lg:col-start-8">
                <div className="flex justify-between">
                  <h1 className="text-xl font-medium text-gray-900">
                    {product?.name}{" "}
                  </h1>
                  <p className="text-xl font-medium text-gray-900">
                    ₹{product?.price}{" "}
                  </p>
                </div>
                <div className="mt-4">
                  <h2 className="sr-only">Reviews</h2>
                  <div className="flex items-center">
                    <p className="text-sm text-gray-700">
                      {product?.numOfReviews} Reviews
                      <span className="sr-only"> out of 5 stars</span>
                    </p>
                    <div className="ml-1 flex items-center">
                      {arr.map((item) => (
                        <svg
                          className="h-5 w-5 flex-shrink-0 text-yellow-400"
                          x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                          x-description="Heroicon name: solid/star"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                      ))}

                      <svg
                        className="h-5 w-5 flex-shrink-0 text-gray-200"
                        x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                        x-description="Heroicon name: solid/star"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    </div>
                    <div
                      aria-hidden="true"
                      className="ml-4 text-sm text-gray-300"
                    >
                      ·
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                <h2 className="sr-only">Images</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                  <img
                    src={product?.images[0].url}
                    className="rounded-lg lg:col-span-2 lg:row-span-2"
                  />

                  {product?.images[1]?.url ? (
                    <>
                      <img
                        src={product?.images[1].url}
                        className="hidden rounded-lg lg:block mt-0 lg:-mt-14"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                  {product?.images[2]?.url ? (
                    <>
                      <img
                        src={product?.images[2].url}
                        className="hidden rounded-lg lg:block mt-0 lg:-mt-14"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="mt-8 lg:col-span-5">
                <div>
                  <div className="flex ">
                    <div className="flex flex-row h-10 w-full rounded-lg relative  mt-1 border-[1px] border-gray-300 w-24">
                      <button
                        onClick={decreaseQuantity}
                        className="  text-gray-600  h-full w-20 rounded-l cursor-pointer outline-none"
                      >
                        <span className="m-auto text-xl ">−</span>
                      </button>
                      <input
                        value={quantity}
                        readOnly
                        className="ml-3 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none font-normal"
                        name="custom-input-number"
                      ></input>
                      <button
                        onClick={increaseQuantity}
                        className="text-gray-600  h-full w-20 rounded-r cursor-pointer"
                      >
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                    {product.Stock > 1 ? (
                      <>
                        {" "}
                        <p className="mt-4 flex text-sm text-gray-700 space-x-2 ml-4">
                          <svg
                            className="flex-shrink-0 h-5 w-5 text-green-500"
                            x-description="Heroicon name: solid/check"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              className="flex-shrink-0 h-5 w-5 text-red-500"
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                          <span>In stock</span>
                        </p>
                      </>
                    ) : (
                      <>
                        {" "}
                        <p className="mt-4 flex text-sm text-gray-700 space-x-2 ml-4">
                          <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"
                            ></path>
                          </svg>
                          <span>Out of stock</span>
                        </p>
                      </>
                    )}
                  </div>

                  <button
                    disabled={product.Stock < 1 ? true : false}
                    onClick={addToCartHandler}
                    type="submit"
                    className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                </div>

                <div className="mt-10">
                  <h2 className="text-sm font-medium text-gray-900">
                    Description
                  </h2>

                  <div className="prose prose-sm mt-4 text-gray-500">
                    {product?.description}
                  </div>
                </div>

                <section aria-labelledby="policies-heading" className="mt-10">
                  <h2 id="policies-heading" className="sr-only">
                    Our Policies
                  </h2>

                  <dl className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <dt>
                        <svg
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          x-description="Heroicon name: outline/globe"
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
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {" "}
                          Free delivery{" "}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        On Order above ₹1000
                      </dd>
                    </div>

                    <div className="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                      <dt>
                        <svg
                          className="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                          x-description="Heroicon name: outline/currency-dollar"
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
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <span className="mt-4 text-sm font-medium text-gray-900">
                          {" "}
                          Loyalty rewards{" "}
                        </span>
                      </dt>
                      <dd className="mt-1 text-sm text-gray-500">
                        Don't look at other tees
                      </dd>
                    </div>
                  </dl>
                </section>
                <button
                  onClick={submitReviewToggle}
                  type="submit"
                  className="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-pink-400 py-3 px-8 text-base font-medium text-white hover:bg-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                >
                  Submit Review
                </button>
              </div>
            </div>

            {/* <!-- Reviews --> */}
            <section
              aria-labelledby="reviews-heading"
              className="mt-16 sm:mt-24"
            >
              <h2
                id="reviews-heading"
                className="text-lg font-medium text-gray-900"
              >
                Recent reviews
              </h2>

              <div className="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
                {/* review */}
                {product.reviews && product.reviews[0] ? (
                  <div className="reviews">
                    {product.reviews &&
                      product.reviews.map((review) => (
                        <ReviewCard key={review._id} review={review} />
                      ))}
                  </div>
                ) : (
                  <p className="mt-2">No Reviews Yet</p>
                )}
              </div>
            </section>
          </main>
          {/* dailog */}
          <Dialog
            aria-labelledby="simple-dialog-title"
            open={open}
            onClose={submitReviewToggle}
          >
            <DialogTitle>Submit Review</DialogTitle>
            <DialogContent className="submitDialog">
              <Rating
                onChange={(e) => setRating(e.target.value)}
                value={rating}
                size="large"
              />

              <textarea
                className="submitDialogTextArea"
                cols="30"
                rows="5"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </DialogContent>
            <DialogActions>
              <Button onClick={submitReviewToggle} color="secondary">
                Cancel
              </Button>
              <Button onClick={reviewSubmitHandler} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          {/* dailog */}
        </Fragment>
      ) : (
        <Loader />
      )}
    </Fragment>
  );
};

export default ProductDetails;
