import React from "react";
import { Link } from "react-router-dom";
import PlayStoreIcon from "../../../images/playstore.png";
import AppStoreIcon from "../../../images/Appstore.png";

function Footer() {
  return (
    <>
      <div>
        <footer
          className=" bg-linear-pink-invert pb-0  border border-black "
          id="footer"
        >
          <div className="mx-auto container  flex flex-col items-center justify-center">
            <div>
              <div className="ml-4 flex lg:ml-0">
                <Link to="/">
                  <span className="sr-only">Workflow</span>
                  <p className="font-extrabold tracking-tight  text-xl lg:text-3xl text-gray-700">
                    Pixies.
                  </p>
                </Link>
              </div>
            </div>
            <div className="text-black flex flex-col md:items-center f-f-l pt-3">
              <h1 className="text-lg font-gray-400 font-serif">
                Buy wear and just be happy.
              </h1>

              <div className="my-6 text-base text-color f-f-l">
                <ul className="md:flex items-center">
                  <Link to="/products">
                    <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                      Products
                    </li>
                  </Link>
                  <Link to="/about-us">
                    <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                      About
                    </li>{" "}
                  </Link>
                  <Link to="/contact-us">
                    <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">
                      Contact us
                    </li>
                  </Link>

                  <li className=" md:mr-6 cursor-pointer pt-4 lg:py-0">Help</li>
                  <li className="cursor-pointer pt-4 lg:py-0">
                    Privacy Policy
                  </li>
                </ul>
              </div>
              <div className="text-sm text-color mb-10 f-f-l">
                <p> © 2022 Abhishek. All rights reserved</p>
              </div>
            </div>
            <div className="w-9/12  h-0.5 bg-gray-100 rounded-full" />
            <div className="flex justify-between items-center pt-12">
              <div className="mr-4">
                <img src={AppStoreIcon} className="w-40" />
              </div>
              <div>
                <img src={PlayStoreIcon} className="w-40" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
