import React from "react";
import { Link } from "react-router-dom";
import Heading from "../../Common/Heading";

const AboutUs = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div>
        <div className="container mx-auto  box-border text-white">
          <div className="grid lg:grid-cols-2 grid-cols-1 px-6 2xl:px-0">
            <div>
              <div className="flex gap-4 md:mt-12">
                <Heading HeadingText="About Us" />
              </div>
              <p className="mt-4 text-p text-justify font-poppins">
              World Model Hunt (WMH) is a distinguished online platform established on June 17,
              2017, by visionaries
                <Link to="/founders/sitanshu-srivastava" className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out" onClick={scrollToTop}> Sitanshu Srivastava </Link>
                (entrepreneur) and
                <Link to="/founders/reggie-gardner" className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out" onClick={scrollToTop}> Reggie Gardner </Link>
                (retired from NASA). Originally conceived to bolster models and brands through
                online promotions, events, contests, and online pageants, WMH swiftly evolved,
                launching its inaugural
                <Link to="/monthly-gazette" className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out" onClick={scrollToTop}>  magazine </Link>
                and
                <Link to="/calendars" className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out" onClick={scrollToTop}>   calendars </Link>
                in January 2019. WMH isn't about
                highlighting beauty and fashion; it's anchored in promoting values. The founders
                envisioned a forum where models could immerse themselves in understanding and
                contributing to the paradigms of diversity and sustainability in the fashion milieu.
              </p>
              <p className="mt-4 text-p text-justify font-poppins">
              Over the years, the platform has grown into a multifaceted space, offering monthly
              magazines, annual calendars, insightful interviews and
                <Link to="/webinterviews" className="font-bold hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out" onClick={scrollToTop}>    webitorials </Link>
                featuring models, celebrities, photographers, and other people in the industry. In addition,
                WMH has embraced the digital age with the incorporation of Google web stories and
                engaging web blogs. At its core, WMH is a testament to the ever-evolving fashion
                industry, highlighting the imperative nature of inclusivity and ethical fashion while
               offering a window into the world of glitz and glamour.
              </p>

            </div>



            {/* Dark Overlay */}
            <div className="lg:hidden block mb-12">
              <iframe
                title="wmh"
                width="100%"
                height="100%"
                className="border-8 boder-white  h-[376px]  mt-12  shadow-2xl"
                src="https://www.youtube.com/embed/7Z8tbHnFM6E?si=pjVJ5kVUCjkYUD2c"
                allowFullScreen
                style={{
                  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)'
                }}
              ></iframe>
            </div>


            <div className="relative hidden lg:block">
              <div
                className="bg-cover ml-14 h-[700px] relative"
                style={{
                  backgroundImage: `url(https://worldmodelhunt.com/api/static/media/BG.35bd821261846471d202b6ec99e44ad9.svg)`,
                }}
              >

                {/* Content */}
                <div className="absolute inset-0 flex flex-col  items-start justify-center text-white">
                  <div className="container mx-auto px-6 xl:px-8 border-box">
                    <div className="bg-purple py-[210px] mt-24 w-[352px] xl:w-[460px] ml-10 relative">
                      <iframe
                        title="wmh_us"
                        width="100%"
                        height="100%"
                        className="border-8 boder-white top-10 w-[490px] xl:w-[590px] -right-16 xl:-right-12 h-[336px]  absolute shadow-2xl"
                        src="https://www.youtube.com/embed/7Z8tbHnFM6E?si=pjVJ5kVUCjkYUD2c"
                        allowFullScreen
                        style={{
                          boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.6)'
                        }}
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;