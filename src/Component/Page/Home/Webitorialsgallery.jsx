import React from "react";
import { Link } from "react-router-dom";

const Webitorialsgallery = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section className="p-0 m-0 md:my-20 my-12 items-center mx-6 md:mx-12 lg:mx-0  lg:container-fluid">
      <div className=" md:mx-auto grid md:grid-cols-12 ">
        <div className="flex flex-col justify-start  items-center col-span-12  lg:col-span-6 hover:text-purple border-4  text-white border-black   hover:border-purple transition duration-300">
          <Link to="/spotlight" onClick={scrollToTop}>
            <h1 className="lg:text-h3 sm:text-h4 text-h5 text-center font-bold py-3 ">
              Models Gallery
            </h1>
            <div className="flex items-center p-0">
              <img src={"https://s3.amazonaws.com/wmh.all.posts/static_images/common/Gallery+bg.jpg"} alt="gallery" />
            </div>
          </Link>
        </div>
    
        <div className="flex flex-col justify-start items-center col-span-12  lg:col-span-6 hover:text-purple border-4  text-white border-black  hover:border-purple transition duration-300">
          <Link to="/webinterviews"
          onClick={scrollToTop}
          >
            <h1 className="lg:text-h3 sm:text-h4 text-h5 text-center  font-bold py-3 ">
            Webitorials
            </h1>
            <div className="flex items-center">
              <img src={"https://s3.amazonaws.com/wmh.all.posts/static_images/DALL%C2%B7E+2024-04-15+23.38.46+-+A+high-resolution+world+map+with+each+country%27s+borders+clearly+delineated.+The+background+of+the+map+is+black%2C+giving+it+a+sleek+and+modern+look.+The.webp"} alt="map" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Webitorialsgallery;
