import React, { useRef, useState, useEffect } from "react";
import { CTAReview } from "../Constant/JsonData";
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";


const Cta = () => {
  const carouselRef = useRef(null);
  const cardWidth = 388;
  let initialX = null;
  let scrollLeft = null;
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [mouseDownX, setMouseDownX] = useState(0);


  const handlePrevClick = () => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
      carouselRef.current.scrollLeft -= cardWidth;
    }
  };


  const handleNextClick = () => {
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
      carouselRef.current.scrollLeft += cardWidth;
    }
  };


  const handleStart = (e) => {
    initialX = e.clientX || e.touches[0].clientX;
    scrollLeft = carouselRef.current.scrollLeft;
    carouselRef.current.style.scrollBehavior = "auto";
  };


  const handleMove = (e) => {
    if (initialX === null) {
      return;
    }


    const x = e.clientX || e.touches[0].clientX;
    const diff = initialX - x;
    carouselRef.current.scrollLeft = scrollLeft + diff;
  };


  const handleEnd = () => {
    initialX = null;
    if (carouselRef.current) {
      carouselRef.current.style.scrollBehavior = "smooth";
    }
  };


  const handleMouseMove = (e) => {
    if (!carouselRef.current) return;
    const touchEndX = e.clientX;
    const touchDifference = mouseDownX - touchEndX;


    carouselRef.current.scrollLeft += touchDifference;
    setMouseDownX(touchEndX);
    updateButtonStyles();
  };


  const handleMouseUp = () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };


  const updateButtonStyles = () => {
    if (carouselRef.current) {
      const maxScrollLeft =
        carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
      setIsAtStart(carouselRef.current.scrollLeft === 0);
      setIsAtEnd(carouselRef.current.scrollLeft >= maxScrollLeft);
    }
  };


  useEffect(() => {
    updateButtonStyles();


    const handleScroll = () => {
      updateButtonStyles();
    };


    if (carouselRef.current) {
      carouselRef.current.addEventListener("scroll", handleScroll);
    }


    return () => {
      
      if (carouselRef.current) {
        carouselRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);


  return (
    <div className=" lg:py-16 md:py-8 py-8  bg-ground overflow-x-hidden px-6 relative box-border font-poppins">
      <div className="grid grid-cols-1 lg:grid-cols-2 container mx-auto mb-12">
        <div className="mx-2">
          <p className="lg:text-h3 sm:text-h4 text-h5 text-white mx-auto font-bold">
          Are you ready to start your modeling journey?
          </p>
        </div>
        <div className="flex lg:justify-end mt-auto gap-3 mx-2">
          
          <button
            onClick={handlePrevClick}
            className={`cursor-pointer text-p bg-${
              isAtStart ? "black text-white" : "dwhite"
            } rounded-full text-h5 font-bold shadow-md  h-14 w-14`}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            onClick={handleNextClick}
            className={`cursor-pointer text-p bg-${
              isAtEnd ? "black text-white" : "dwhite"
            } rounded-full text-h5 font-bold shadow-md  h-14 w-14`}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>


      <div
        className="flex items-center  whitespace-no-wrap overflow-x-hidden md:ml-4 "
        style={{ scrollSnapType: "x mandatory", width: "100%" }}
        ref={carouselRef}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
      >
        <div className="w-96 flex gap-8">
          {CTAReview.map((data, index) => {
            return (
              <div
                className={`inline-block rounded-2xl relativecard-${index}`}
                key={index}
              >
                <div className="relative w-[360px] md:w-[490px] cta   shadow-lg">
                  <div className="overflow-hidden ">
                    <>
                      <div className="h-full w-full">
                        <img
                          className="h-full w-full"
                          alt="ss"
                          src={data.image}
                        />
                        <div className="dark-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
                      </div>
                    </>
                  </div>
                  <div className="absolute inset-0 md:flex sm:flex-none flex-col justify-center  pl-4 md:pt-0  text-white">
                    <h1 className="text-h4 font-bold tracking-tight mb-4 font-poppins">
                      {data.title}
                    </h1>
                    <p className="mb-2 text-p font-poppins">{data.paragraph}</p>
                  </div>
                  <div className="absolute bottom-4 left-4 px-2">
                    <Btn btname={data.btn} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};


export default Cta;
