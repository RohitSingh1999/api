import React from "react";
import { Link } from "react-router-dom";
import FooterHeader from "./FooterCommon/FooterHeader";
import Btn from "./Btn";

const DefaultPage = () => {
  return (
    <>
      <div className="bg-gradient-to-r mt-48 from-purple to-black w-full lg:h-64  mb-28 mt-28 container mx-auto">
        <div className="grid grid-cols-12">
          <div className="md:col-span-8 col-span-12 p-6">
            <p
              className="text-white font-bold font-poppins text-h3 2xl:text-h2  md:ml-24 py-4 2xl:py-8"
              style={{ letterSpacing: "2px", wordSpacing: "6px" }}
            >
              404 - Page Not Found{" "}
            </p>

            <p className="text-white font-poppins md:ml-24">
              Sorry, the page you are looking for does not exist.
            </p>
          </div>
          <Link to="/">
            <div className="md:col-span-4 col-span-12 p-6">
              <div className="font-poppins py-3 md:mt-24">
                <Btn btname="Back To Home" />
              </div>
            </div>
          </Link>
        </div>
      </div>
      <FooterHeader />
    </>
  );
};

export default DefaultPage;
