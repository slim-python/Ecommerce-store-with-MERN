import React, { Fragment } from "react";

const Aboutus = () => {
  return (
    <Fragment>
      <div class="bg-gray-900">
        <main>
          {/* <!-- Stats section --> */}
          <div class="relative bg-gray-900">
            <div class="absolute inset-x-0 bottom-0 h-80 xl:top-0 xl:h-full">
              <div class="h-full w-full xl:grid xl:grid-cols-2">
                <div class="h-full xl:relative xl:col-start-2">
                  <img
                    class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                  ></div>
                </div>
              </div>
            </div>
            <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-flow-col-dense xl:grid-cols-2 xl:gap-x-8">
              <div class="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                <h2 class="text-sm font-semibold uppercase tracking-wide">
                  <span class="bg-gradient-to-r from-purple-300 to-indigo-300 bg-clip-text text-transparent">
                    A small story about
                  </span>
                </h2>
                <p class="mt-3 text-3xl font-extrabold text-white">
                  How we got started
                </p>
                <p class="mt-5 text-lg text-gray-300">
                  Launched in 2022, as a College fun project, pixie was the
                  first one-of-its kind large format specialist eCommerce store
                  that catered to all multi-brand digital gadgets, gorceries and
                  home electronic needs in India. Over a decade since its
                  inception, Pixiwa has almost become synonyms for all
                  electronics and gorceries needs, with its tech-savvy staff,
                  product range, Staged presence and the will to help customers.
                </p>
                <div class="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  <p>
                    <span class="block text-2xl font-bold text-white">8K+</span>
                    <span class="mt-1 block text-base text-gray-300">
                      <span class="font-medium text-white">customers</span> use
                      it everymonth.
                    </span>
                  </p>

                  <p>
                    <span class="block text-2xl font-bold text-white">11+</span>
                    <span class="mt-1 block text-base text-gray-300">
                      <span class="font-medium text-white">
                        States around the india
                      </span>{" "}
                      has it's reach
                    </span>
                  </p>

                  <p>
                    <span class="block text-2xl font-bold text-white">98%</span>
                    <span class="mt-1 block text-base text-gray-300">
                      <span class="font-medium text-white">
                        Customer satisfaction
                      </span>{" "}
                      We are not kidding about this
                    </span>
                  </p>

                  <p>
                    <span class="block text-2xl font-bold text-white">1M+</span>
                    <span class="mt-1 block text-base text-gray-300">
                      <span class="font-medium text-white">
                        Products has been orderd
                      </span>{" "}
                      up unitll now.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Logo Cloud --> */}
          <div class="bg-gray-900">
            <div class="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
              <p class="text-center text-sm font-semibold uppercase tracking-wide text-gray-500">
                Trusted by these brnads
              </p>
              <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                    alt="Tuple"
                  />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                    alt="Mirage"
                  />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                    alt="StaticKit"
                  />
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                    alt="Transistor"
                  />
                </div>
                <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                  <img
                    class="h-12"
                    src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                    alt="Workcation"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Our team behind logo */}
          <div class="relative">
            <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-900"></div>
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div class="relative shadow-xl sm:overflow-hidden sm:rounded-2xl">
                <div class="absolute inset-0">
                  <img
                    class="h-full w-full object-cover"
                    src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2830&amp;q=80&amp;sat=-100"
                    alt="People working on laptops"
                  />
                  <div class="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply"></div>
                </div>
                <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span class="block text-white">Now its time to</span>
                    <span class="block text-indigo-200">Meet our team</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

          {/* pur team */}
          <div class="bg-gray-900">
            <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
              <div class="space-y-12">
                <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
                  <h2 class="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    Our team members
                  </h2>
                </div>
                <ul
                  role="list"
                  class="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8"
                >
                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img
                        class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                        src="https://res.cloudinary.com/dkkvcq7gb/image/upload/v1657368438/samples/1656770383352_egurev.jpg"
                        alt=""
                      />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Abhishek </h3>
                          <p class="text-indigo-400">CEO of Pixies</p>
                        </div>

                        <ul role="list" class="flex justify-center space-x-5">
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img
                        class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                        src="https://res.cloudinary.com/dkkvcq7gb/image/upload/v1657431724/samples/people/WhatsApp_Image_2022-07-10_at_10.39.41_AM_1_aapb3s.jpg"
                        alt=""
                      />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Subodh</h3>
                          <p class="text-indigo-400">CTO of Pixies</p>
                        </div>

                        <ul role="list" class="flex justify-center space-x-5">
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img
                        class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                        src="https://res.cloudinary.com/dkkvcq7gb/image/upload/v1657425582/samples/people/176860125_690754682340559_2683985702207742560_n_srvhmn.jpg"
                        alt=""
                      />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Savita tudu</h3>
                          <p class="text-indigo-400">Design Team</p>
                        </div>

                        <ul role="list" class="flex justify-center space-x-5">
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img
                        class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                        src="https://res.cloudinary.com/dkkvcq7gb/image/upload/v1657431721/samples/people/WhatsApp_Image_2022-07-10_at_10.39.41_AM_mpj1do.jpg"
                        alt=""
                      />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Kashyap kumar</h3>
                          <p class="text-indigo-400">VP, Human Resources</p>
                        </div>

                        <ul role="list" class="flex justify-center space-x-5">
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>

                  <li class="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                    <div class="space-y-6 xl:space-y-10">
                      <img
                        class="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56"
                        src="https://res.cloudinary.com/dkkvcq7gb/image/upload/v1657431720/samples/people/s_df5yot.jpg"
                        alt=""
                      />
                      <div class="space-y-2 xl:flex xl:items-center xl:justify-between">
                        <div class="space-y-1 text-lg font-medium leading-6">
                          <h3 class="text-white">Sudhanshu Kumar</h3>
                          <p class="text-indigo-400">
                            Senior Front-end Developer
                          </p>
                        </div>

                        <ul role="list" class="flex justify-center space-x-5">
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">Twitter</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                              </svg>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              class="text-gray-400 hover:text-gray-300"
                            >
                              <span class="sr-only">LinkedIn</span>
                              <svg
                                class="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                aria-hidden="true"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Fragment>
  );
};

export default Aboutus;
