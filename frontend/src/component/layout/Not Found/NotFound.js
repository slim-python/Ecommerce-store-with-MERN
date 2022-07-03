import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAsyncProductDetails } from "../../../features/products/productSlice";
const NotFound = () => {
  const dispatch = useDispatch();

  const { product, success } = useSelector(
    (state) => state.productReducer.productDetails
  );

  let arr = [1, 2, 3, 4];

  useEffect(() => {
    console.log("first");
    dispatch(fetchAsyncProductDetails("62c086747c18505eec2a6d81"));
  }, []);

  return (
    <Fragment>
      <main class="mx-auto mt-8 max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8 mt-20">
        <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
          <div class="lg:col-span-5 lg:col-start-8">
            <div class="flex justify-between">
              <h1 class="text-xl font-medium text-gray-900">
                {product?.name}{" "}
              </h1>
              <p class="text-xl font-medium text-gray-900">
                ${product?.price}{" "}
              </p>
            </div>
            <div class="mt-4">
              <h2 class="sr-only">Reviews</h2>
              <div class="flex items-center">
                <p class="text-sm text-gray-700">
                  {product?.reviews.length} Reviews
                  <span class="sr-only"> out of 5 stars</span>
                </p>
                <div class="ml-1 flex items-center">
                  {arr.map((item) => (
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
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
                    class="h-5 w-5 flex-shrink-0 text-gray-200"
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
                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">
                  ·
                </div>
              </div>
            </div>
          </div>

          <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
            <h2 class="sr-only">Images</h2>

            <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
              <img
                src={product?.images[0].url}
                alt="Back of women&amp;#039;s Basic Tee in black."
                class="rounded-lg lg:col-span-2 lg:row-span-2"
              />

              <img
                src={product?.images[1].url}
                alt="Side profile of women&amp;#039;s Basic Tee in black."
                class="hidden rounded-lg lg:block mt-0 lg:-mt-14"
              />

              <img
                src={product?.images[1].url}
                alt="Front of women&amp;#039;s Basic Tee in black."
                class="hidden rounded-lg lg:block mt-0 lg:-mt-14"
              />
            </div>
          </div>

          <div class="mt-8 lg:col-span-5">
            <form>
              <div className="flex ">
                <div class="flex flex-row h-10 w-full rounded-lg relative  mt-1 border-[1px] border-gray-300 w-24">
                  <button
                    data-action="decrement"
                    class="  text-gray-600  h-full w-20 rounded-l cursor-pointer outline-none"
                  >
                    <span class="m-auto text-xl ">−</span>
                  </button>
                  <input
                    readOnly
                    class="ml-3 focus:outline-none text-center w-full  font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none font-normal"
                    name="custom-input-number"
                    value="0"
                  ></input>
                  <button
                    data-action="increment"
                    class="text-gray-600  h-full w-20 rounded-r cursor-pointer"
                  >
                    <span class="m-auto text-2xl font-thin">+</span>
                  </button>
                </div>
                <p class="mt-4 flex text-sm text-gray-700 space-x-2 ml-4">
                  <svg
                    class="flex-shrink-0 h-5 w-5 text-green-500"
                    x-description="Heroicon name: solid/check"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span>In stock</span>
                </p>
              </div>

              <button
                type="submit"
                class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </form>

            <div class="mt-10">
              <h2 class="text-sm font-medium text-gray-900">Description</h2>

              <div class="prose prose-sm mt-4 text-gray-500">
                {product?.description}
              </div>
            </div>

            <section aria-labelledby="policies-heading" class="mt-10">
              <h2 id="policies-heading" class="sr-only">
                Our Policies
              </h2>

              <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                      x-description="Heroicon name: outline/globe"
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
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span class="mt-4 text-sm font-medium text-gray-900">
                      {" "}
                      International delivery{" "}
                    </span>
                  </dt>
                  <dd class="mt-1 text-sm text-gray-500">
                    Get your order in 2 years
                  </dd>
                </div>

                <div class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                  <dt>
                    <svg
                      class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"
                      x-description="Heroicon name: outline/currency-dollar"
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
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span class="mt-4 text-sm font-medium text-gray-900">
                      {" "}
                      Loyalty rewards{" "}
                    </span>
                  </dt>
                  <dd class="mt-1 text-sm text-gray-500">
                    Don't look at other tees
                  </dd>
                </div>
              </dl>
            </section>
          </div>
        </div>

        {/* <!-- Reviews --> */}
        <section aria-labelledby="reviews-heading" class="mt-16 sm:mt-24">
          <h2 id="reviews-heading" class="text-lg font-medium text-gray-900">
            Recent reviews
          </h2>

          <div class="mt-6 space-y-10 divide-y divide-gray-200 border-t border-b border-gray-200 pb-10">
            <div class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div class="flex items-center xl:col-span-1">
                  <div class="flex items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="Active: &amp;quot;text-yellow-400&amp;quot;, Inactive: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
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
                  <p class="ml-3 text-sm text-gray-700">
                    5<span class="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    Can&amp;#039;t say enough good things
                  </h3>

                  <div class="mt-3 space-y-6 text-sm text-gray-500">
                    <p>
                      I was really pleased with the overall shopping experience.
                      My order even included a little personal, handwritten
                      note, which delighted me!
                    </p>
                    <p>
                      The product quality is amazing, it looks and feel even
                      better than I had anticipated. Brilliant stuff! I would
                      gladly recommend this store to my friends. And, now that I
                      think of it... I actually have, many times!
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p class="font-medium text-gray-900">Risako M</p>
                <time
                  datetime="2021-01-06"
                  class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  May 16, 2021
                </time>
              </div>
            </div>

            <div class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div class="flex items-center xl:col-span-1">
                  <div class="flex items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="Active: &amp;quot;text-yellow-400&amp;quot;, Inactive: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
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
                  <p class="ml-3 text-sm text-gray-700">
                    5<span class="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    Very comfy and looks the part
                  </h3>

                  <div class="mt-3 space-y-6 text-sm text-gray-500">
                    <p>
                      After a quick chat with customer support, I had a good
                      feeling about this shirt and ordered three of them.
                    </p>
                    <p>
                      Less than 48 hours later, my delivery arrived. I
                      haven&#039;t worn anything else since that day! These
                      shirts are so comfortable, yet look classy enough that I
                      can wear them at work or even some formal events. Winning!
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p class="font-medium text-gray-900">Jackie H</p>
                <time
                  datetime="2021-01-06"
                  class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  April 6, 2021
                </time>
              </div>
            </div>

            <div class="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div class="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div class="flex items-center xl:col-span-1">
                  <div class="flex items-center">
                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="Active: &amp;quot;text-yellow-400&amp;quot;, Inactive: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-yellow-400"
                      x-state-description="undefined: &amp;quot;text-yellow-400&amp;quot;, undefined: &amp;quot;text-gray-200&amp;quot;"
                      x-description="Heroicon name: solid/star"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>

                    <svg
                      class="h-5 w-5 flex-shrink-0 text-gray-200"
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
                  <p class="ml-3 text-sm text-gray-700">
                    4<span class="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div class="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 class="text-sm font-medium text-gray-900">
                    The last shirts I may ever need
                  </h3>

                  <div class="mt-3 space-y-6 text-sm text-gray-500">
                    <p>
                      I bought two of those comfy cotton shirts, and let me tell
                      you: they&#039;re amazing! I have been wearing them almost
                      every day. Even after a dozen of washes, that still looks
                      and feel good as new. Will definitely order a few more...
                      If I ever need to!
                    </p>
                  </div>
                </div>
              </div>

              <div class="mt-6 flex items-center text-sm lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p class="font-medium text-gray-900">Laura G</p>
                <time
                  datetime="2021-01-06"
                  class="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  February 24, 2021
                </time>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;
