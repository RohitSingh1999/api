import React, { useState } from "react";
import { Link } from "react-router-dom";
import Heading from "../../Common/Heading";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import AdsComponent from "../../../Ads";


const About = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>

      <div className="container mx-auto px-6 sm:px-6 pt-14 font-poppins text-white">

        <div className="">
          <Heading HeadingText="About Us" />
          <div className="my-12">
            <p className="mt-4 text-p text-justify font-poppins">
            World Model Hunt (WMH) is a distinguished online platform established on June 17,
            2017, by visionaries
              <Link
                to="/founders/sitanshu-srivastava"
                className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={scrollToTop}
              >
                {" "}
                Sitanshu Srivastava{" "}
              </Link>
              (entrepreneur) and
              <Link
                to="/founders/reggie-gardner"
                className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={scrollToTop}
              >
                {" "}
                Reggie Gardner{" "}
              </Link>
              (retired from NASA). Originally conceived to bolster models and brands through
              online promotions, events, contests, and online pageants, WMH swiftly evolved,
              launching its inaugural
              <Link
                to="/monthly-gazette"
                className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={scrollToTop}
              >
                {" "}
                magazine{" "}
              </Link>
              and
              <Link
                to="/calendars"
                className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={scrollToTop}
              >
                {" "}
                calendars{" "}
              </Link>
              in January 2019. WMH isn't about
              highlighting beauty and fashion; it's anchored in promoting values. The founders
              envisioned a forum where models could immerse themselves in understanding and
              contributing to the paradigms of diversity and sustainability in the fashion milieu.
            </p>
            <p className="mt-4 text-p text-justify font-poppins">
            Over the years, the platform has grown into a multifaceted space, offering monthly
            magazines, annual calendars, insightful interviews and
              <Link
                to="/webinterviews"
                className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                onClick={scrollToTop}
              >
                {" "}
                webitorials{" "}
              </Link>
              featuring models, celebrities, photographers, and other people in the industry. In addition,
              WMH has embraced the digital age with the incorporation of Google web stories and
              engaging web blogs. At its core, WMH is a testament to the ever-evolving fashion
              industry, highlighting the imperative nature of inclusivity and ethical fashion while
              offering a window into the world of glitz and glamour.
            </p>
          </div>

          <p className=" text-h4 font-bold my-20">
            OUR LEADERSHIP TEAM
          </p>

          <div className="bg-black grid lg:grid-cols-2 grid-cols-1 justify-around items-center py-0.5 xl:gap-48 lg:gap-24 gap-24  md:my-16">

            <div className="flex cursor-pointer lg:justify-end justify-center relative group">
              <Link to="/founders/reggie-gardner">
                <div className="relative" onClick={scrollToTop}>
                  <img
                    className="w-[500px]"
                    src="https://s3.amazonaws.com/wmh.all.posts/static_images/common/reggie.132e88fd12c599abd123.jpg"
                    alt="Reggie Gardner"
                  />
                  <div className="absolute left-0 w-full h-[70%] bottom-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="absolute bottom-0 left-0 p-3 text-white">
                    <p className="sm:text-h5 sm:font-semibold font-bold sm:ml-10 ml-4">
                      REGGIE GARDNER
                    </p>
                    <p className="text-p sm:ml-10 md:mb-6 sm:mb-3 ml-4">CEO & CO-FOUNDER</p>
                  </div>
                </div>
              </Link>
              <div className="absolute top-0 lg:right-0 md:right-[20%] sm:right-[15%] right-[5%] flex flex-col items-end lg:p-5 p-3 text-white transform transition-transform duration-300 opacity-0 group-hover:transform translate-x-0 group-hover:opacity-100">
                <Link to="https://www.linkedin.com/in/reginald-gardner-0b966442/" target="_blank">
                  <p className="bg-black p-1 rounded-md text-[#ED2228] m-5">
                    <FontAwesomeIcon className="text-h5" icon={faLinkedinIn} />
                  </p>
                </Link>
              </div>
            </div>


            <div className="flex cursor-pointer justify-center gap-3 relative group md:mb-0 mb-20">
              <Link to="/founders/sitanshu-srivastava">
                <div className="relative" onClick={scrollToTop}>
                  <img
                    className="w-[500px]"
                    src="https://s3.amazonaws.com/wmh.all.posts/static_images/common/sitanshu.5e2e27b398b926c9277b.jpg"
                    alt="Reggie Gardner"
                  />
                  <div className="absolute left-0 w-full h-[70%] bottom-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-100"></div>

                  <div className="absolute bottom-0 left-0 sm:p-3 p-1 text-white">
                    <p className="sm:text-h5 sm:font-semibold font-bold sm:ml-10 ml-4">
                      SITANSHU SRIVASTAVA
                    </p>
                    <p className="text-p sm:ml-10 md:mb-6 sm:mb-3 ml-4">
                      CO-FOUNDER & INTERNATIONAL BUSINESS MANAGER
                    </p>
                  </div>
                </div>
              </Link>
              <div className="absolute top-0 lg:right-0 2xl:right-16 md:right-[20%] sm:right-[15%] right-[5%] flex flex-col items-end lg:p-5 p-3 text-white transform transition-transform duration-300 opacity-0 group-hover:transform translate-x-0 group-hover:opacity-100">
                <Link to="https://www.linkedin.com/in/sitanshu-srivastava/" target="_blank">
                  <p className="bg-black p-1 rounded-md text-[#ED2228] m-5">
                    <FontAwesomeIcon className="text-h5" icon={faLinkedinIn} />
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>           
      </div>
      <AdsComponent  dataAdSlot='2546533171'/>
      <FooterHeader />
    </>
  );
};

export default About;