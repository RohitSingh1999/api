import React from "react";
import Btn from "../../Common/Btn";
import { Link } from "react-router-dom";

const GetFeatured = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        className="h-auto 2xl:h-[760px] overflow-hidden flex items-center py-5 "
        style={{
          backgroundImage: "linear-gradient(35deg, #f3468e 38%, black 30%)",
        }}
      >
        <div className="container mx-auto grid grid-cols-1 md:gap-5 lg:gap-32 lg:grid-cols-2 md:grid-cols-2 ">
        <div className=" flex items-center">
            <img
              src="https://s3.amazonaws.com/wmh.all.posts/static_images/footer/Get+Featured.webp"
              alt="promot brand"
              className=""
            ></img>
          </div>
          <div className=" h-min  my-4 md:my-16 xl:my-52 mx-2">
            <div className="mx-auto p-4  bg-black border border-purple ">
              <p className="lg:text-h2 sm:text-h3 text-h4 leading-tight text-white  font-bold">
                Get Featured
              </p>
              <p className="text-white mb-6 text-pretty text-justify">
                Elevate your presence in the fashion world with World Model
                Hunt. By getting featured on our esteemed platform, you not only
                gain unparalleled exposure but also join an elite community
                revered for its dedication to diversity and sustainability. Our
                top-tier promotional services, starting at just $49.99, are
                designed to spotlight your unique talents and amplify your
                reach.
                <span className="hidden lg:block lg:inline">
                  {" "}
                  This is more than just a feature; it&#39;s an investment in
                  your career, opening doors to opportunities and establishing
                  your foothold in the industry. Seize the moment. Shine with
                  us. Join now!
                </span>
              </p>

              <Link to="/get-in-touch" onClick={scrollToTop}><Btn  btname="Advertise Now" /></Link>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default GetFeatured;