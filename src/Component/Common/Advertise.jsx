import React from "react";
import Btn from "./Btn";
import { Link } from "react-router-dom";

const Advertise = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="h-auto  overflow-hidden py-5"
        style={{
          backgroundImage: "linear-gradient(135deg, #141414 63.95%, #f3468e 35%)",
        }}
      >
        <div className="container mx-auto grid gap-8 grid-cols-1 lg:grid-cols-2 md:grid-cols-2">
          <div className="md:my-16">
            <img
              src="https://s3.amazonaws.com/wmh.all.posts/static_images/instagram_Feature/image+-india.png"
              alt="promot brand"
              className=" w-11/12"
            ></img>
          </div>
          <div className="md:my-16 lg:my-28 xl:my-56">
            <div className="mx-auto p-8  bg-black  border border-purple ">
              <p className="lg:text-h3 sm:text-h4 text-h5 text-white  font-bold leading-[1rem]">
                Advertise
              </p>
              <span className="lg:text-h2 sm:text-h3 text-h4 leading-tight text-white  font-bold">
                With Us Now
              </span>
              <p className="text-white mb-6 text-pretty text-justify">
               Elevate your brand's reach and impact with our "Advertise with Us" opportunity. Promote your products and services to our diverse, engaged audience, spanning across industries and demographics. Our platform offers targeted advertising that ensures your message resonates. Join hands with us to captivate, inspire, and grow. Partner with us today and harness the potential of strategic promotion.
                {/* <span className="hidden  lg:block">
                  At WMH, we offer customized advertising solutions designed to
                  ensure your brand shines. With our expert marketing strategies
                  and an extensive
                </span> */}
              </p>
              <Link to="/get-in-touch" onClick={scrollToTop} ><Btn btname="Contact Us" /></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advertise;
