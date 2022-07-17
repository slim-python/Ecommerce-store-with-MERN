import React, { Fragment, useRef, useState, useEffect } from "react";
import Loader from "../layout/Loader/Loader";
import { Link } from "react-router-dom";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import FaceIcon from "@material-ui/icons/Face";
import { useDispatch, useSelector } from "react-redux";
import {
  loginUser,
  registerUser,
  clearErrors,
} from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

const LoginSignUp = () => {
  const alert = useAlert();
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isAuthenticated, message } = useSelector(
    (state) => state.authReducer
  );

  const [loginSignUpForm, setloginSignUpForm] = useState(true);

  let toggleLoginSignup = () => {
    setloginSignUpForm(!loginSignUpForm);
  };

  let isLoading = false;

  useEffect(() => {
    if (isAuthenticated) {
      console.log("user is authenticated, redirecting back to home page");
      navigate("/", { replace: true });
    }

    if (message) {
      alert.error(message);
      dispatch(clearErrors());
    }
  }, [isAuthenticated, message]);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const [userData, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { name, email, password } = userData;

  const [avatar, setAvatar] = useState("/Profile.png");
  const [avatarPreview, setAvatarPreview] = useState("/Profile.png");

  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser({ email: loginEmail, password: loginPassword }));
    // alert.success("Welcome Back !!");
  };

  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    dispatch(registerUser(myForm));
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...userData, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          {/* login sign up box */}
          <main>
            <div id="loginBox" className={loginSignUpForm ? `block` : `hidden`}>
              <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-0 lg:mt-20">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      Sign in to see your orders
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      Don't have an account yet?
                      <a
                        onClick={toggleLoginSignup}
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                        Sign up{" "}
                      </a>
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={loginSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          type="email"
                          required
                          value={loginEmail}
                          onChange={(e) => setLoginEmail(e.target.value)}
                          id="email-address"
                          name="email"
                          autoComplete="email"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          type="password"
                          required
                          value={loginPassword}
                          onChange={(e) => setLoginPassword(e.target.value)}
                          id="password"
                          name="password"
                          autoComplete="current-password"
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      {/* <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <button
                        type="submit"
                        value="Login"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div
              id="SignUpBox"
              className={loginSignUpForm ? `hidden` : `block`}
            >
              <div className=" min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 mt-0 lg:mt-20">
                <div className="max-w-md w-full space-y-8">
                  <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                      Sign up to make orders
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                      Already have an account?
                      <a
                        onClick={toggleLoginSignup}
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        {" "}
                        Sign in{" "}
                      </a>
                    </p>
                  </div>
                  <form className="mt-8 space-y-6" onSubmit={registerSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                      <div>
                        <label htmlFor="Name" className="sr-only">
                          Name
                        </label>
                        <input
                          name="name"
                          value={name}
                          onChange={registerDataChange}
                          id="Name"
                          type="text"
                          autoComplete="name"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Enter your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email-address" className="sr-only">
                          Email address
                        </label>
                        <input
                          name="email"
                          value={email}
                          onChange={registerDataChange}
                          id="email-address-register"
                          type="email"
                          autoComplete="email"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Email address"
                        />
                      </div>
                      <div>
                        <label htmlFor="password" className="sr-only">
                          Password
                        </label>
                        <input
                          name="password"
                          value={password}
                          onChange={registerDataChange}
                          id="password-register"
                          type="password"
                          autoComplete="current-password"
                          required
                          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          placeholder="Password"
                        />
                      </div>
                      <div>
                        <form className="flex items-center space-x-6 border border-gray-300 rounded-b-md py-1 ">
                          <div className="shrink-0 ml-3">
                            <img
                              className="object-cover w-8 h-8 rounded-full"
                              src={avatarPreview}
                              alt="profile photo"
                            />
                          </div>
                          <label className="block">
                            <span className="sr-only">Choose File</span>
                            <input
                              type="file"
                              name="avatar"
                              accept="image/*"
                              onChange={registerDataChange}
                              className=" block w-full text-sm text-gray-500 file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                          </label>
                        </form>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember-me-register"
                          name="remember-me"
                          type="checkbox"
                          className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                        />
                        <label
                          htmlFor="remember-me"
                          className="ml-2 block text-sm text-gray-900"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>

                      {/* <div className="text-sm">
                        <a
                          href="#"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {" "}
                          Forgot your password?{" "}
                        </a>
                      </div> */}
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          <svg
                            className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                        Sign up
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </Fragment>
      )}
    </Fragment>
  );
};

export default LoginSignUp;
