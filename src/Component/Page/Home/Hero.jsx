import React, { useState, useEffect } from "react";
import Btn from "../../Common/Btn";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentOpacity, setContentOpacity] = useState(1);

  const slides = [
    {
      id: 1,
      icon: "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/icons/gallery.png",
      text: "Explore Our Stunning",
      heading: "Gallery",
      description:
        "Our gallery is a curated space where your photos take the spotlight. From vibrant portraits to chic compositions, witness the power of visual storytelling. Share your moments, and inspire others. Welcome to your personal showcase at World Model Hunt.",
      imageSrc:
        "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/Hero+gallery.jpg",
      link: "/spotlight",
    },
    {
      id: 2,
      icon: "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/icons/magazine.png",
      text: "Explore Our Latest",
      heading: "Magazine",
      description:
        "Discover the latest trends, stories, and inspiration in our Magazine. Dive into the world of fashion and modeling with captivating articles and stunning visuals. Your go-to source for what's hot and happening in the industry. Explore now!",
      imageSrc:
        "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/Hero+Magazine.jpg",
      link: "/monthly-gazette",
    },
    {
      id: 3,
      icon: "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/icons/blog.png",
      text: "Explore Our Captivating",
      heading: "Webitorials",
      description:
        "Unleash creativity with our Webitorial showcase. Experience unique digital stories that redefine the art of storytelling. Be part of a community that celebrates and inspires through visually stunning narratives. Explore the extraordinary in every click!",
      imageSrc:
        "https://s3.amazonaws.com/wmh.all.posts/static_images/hero_section/Hero+webitorials.jpg",
      link: "/webinterviews",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentOpacity(0.1);
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        setContentOpacity(1);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  return (
    <div className="container-fluid h-min font-poppins bg-black  mt-24 px-6 relative">
      <div className="md:container mx-auto h-full box-border relative">
        <div
          className="grid  lg:grid-cols-12 gap-6 h-min py-3"
          style={{
            opacity: contentOpacity,
            transition: "opacity 0.5s ease-in-out",
          }}
        >
          <div className="xl:col-span-2 col-span-3  lg:order-first">
            <div className="flex flex-col items-start justify-end h-full">
              <div className="h-8 w-8">
                <img
                  src={slides[currentSlide].icon}
                  alt="heroicon"
                  className="h-8 w-8"
                />
              </div>
            </div>
          </div>

          <div className="xl:col-span-9 col-span-9 bg-black text-white  order-first">
            <div className=" xl:pl-24 xl:pt-8">
              <p className="md:text-h3  text-h4 font-semibold ">
                {slides[currentSlide].text}
              </p>
              <span className="xl:text-h1 md:text-h2 text-h3 font-bold lg:leading-0 xl:leading-[9rem]">
                {slides[currentSlide].heading}
              </span>
              <p className="mb-4 my-4 text-p xl:w-[75%] lg:w-[80%] text-justify text-pretty">
                {slides[currentSlide].description}
              </p>
              <Link to={slides[currentSlide].link}>
                <Btn btname="Read More" />
              </Link>
            </div>
          </div>
        </div>
        <img
          className="w-full lg:container mx-auto lg:h-[25rem] md:h-[25rem] h-[15rem] object-cover box-border slider-image mt-5 "
          style={{
            opacity: contentOpacity,
            transition: "opacity 0.5s ease-out",
          }}
          src={slides[currentSlide].imageSrc}
          alt={`Hero Image ${currentSlide + 1}`}
        />
        <div className="absolute md:-inset-5 -inset-5 md:top-1/2 top-[65%]   transform  flex items-center justify-between">
          <button
            className="cursor-pointer text-p bg-black text-white rounded-full  font-bold shadow-lg md:h-14 md:w-14 w-10 h-10 "
            onClick={goToPreviousSlide}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </button>
          <button
            className="cursor-pointer text-p bg-black text-white rounded-full font-bold shadow-lg md:h-14 md:w-14 w-10 h-10 "
            onClick={goToNextSlide}
          >
            <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;