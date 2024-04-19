import React, { useState, useEffect } from "react";
import Sidebar from "../../Common/Sidebar";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import imagesData from "../../Constant/JsonData";
import Heading from "../../Common/Heading";
import { Link } from "react-router-dom";
import Btn from "../../Common/Btn";

const Cd = () => {
  const Card = () => {
    const [rotation, setRotation] = useState(1);
    const rotationStep = 360 / imagesData.length;
    let isDragging = false;
    let startX = 0;
    const dragThreshold = 5;
    const draggingTimeout = 200;
    let dragTimeoutId = null;

    useEffect(() => {
      const handlePointerDown = (event) => {
        isDragging = true;
        startX = event.clientX;
      };

      const handlePointerMove = (event) => {
        if (isDragging) {
          const deltaX = event.clientX - startX;

          if (Math.abs(deltaX) > dragThreshold) {
            event.preventDefault();

            if (!dragTimeoutId) {
              setRotation(
                (prevRotation) =>
                  prevRotation + (deltaX > 0 ? rotationStep : -rotationStep)
              );

              startX = event.clientX;

              dragTimeoutId = setTimeout(() => {
                dragTimeoutId = null;
              }, draggingTimeout);
            }
          }
        }
      };

      const handlePointerUp = () => {
        isDragging = false;
        if (dragTimeoutId) {
          clearTimeout(dragTimeoutId);
          dragTimeoutId = null;
        }
      };

      const anchorElement = document.getElementById("anchor");

      if (anchorElement) {
        anchorElement.addEventListener("pointerdown", handlePointerDown);
        anchorElement.addEventListener("pointermove", handlePointerMove);
        anchorElement.addEventListener("pointerup", handlePointerUp);
      }

      return () => {
        if (anchorElement) {
          anchorElement.removeEventListener("pointerdown", handlePointerDown);
          anchorElement.removeEventListener("pointermove", handlePointerMove);
          anchorElement.removeEventListener("pointerup", handlePointerUp);
        }

        if (dragTimeoutId) {
          clearTimeout(dragTimeoutId);
          dragTimeoutId = null;
        }
      };
    }, [rotationStep, dragThreshold, draggingTimeout]);

    const uniqueYears = Array.from(
      new Set(imagesData.map((item) => item.Year))
    );
    const uniqueCategories = Array.from(
      new Set(imagesData.map((item) => item.Category))
    );

    const [selectedYear, setSelectedYear] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filterVisible, setFilterVisible] = useState(true);
    const [yearData, setYearData] = useState([]);

    useEffect(() => {
      if (selectedYear !== null || selectedCategory !== null) {
        const dataForSelectedYear = imagesData.filter(
          (item) =>
            (selectedYear ? item.Year === selectedYear : true) &&
            (selectedCategory ? item.Category === selectedCategory : true)
        );
        setYearData(dataForSelectedYear);
      } else {
        setYearData(imagesData);
      }
    }, [selectedYear, selectedCategory]);

    return (
      <main>
        <Sidebar />
        <div className="container mx-auto px-6 border-box mt-32  -mb-32">
          <div className="lg:flex justify-between items-start gap-6">
            <span className="text-h3 font-bold font-poppins">
              <Heading HeadingText="Web Stories" />
            </span>
            <div className="py-4 flex flex-wrap gap-2 lg:gap-2">
              <div
                className={`bg-gray-200 border border-gray-300 px-2 lg:py-2 py-flex items-center justify-center cursor-pointer${
                  !selectedYear && !selectedCategory
                    ? "border border-purple text-purple"
                    : ""
                }`}
                onClick={() => {
                  setSelectedYear(null);
                  setSelectedCategory(null);
                  setFilterVisible(true);
                }}
              >
                All
              </div>
               {uniqueYears.map((year, index) => (
                <div
                  key={index}
                  className={`bg-gray-200 border border-gray-300 px-2 lg:py-2 py- flex items-center justify-center cursor-pointer  ${
                    selectedYear === year && !selectedCategory
                      ? "border border-purple text-purple"
                      : ""
                  }`}
                  onClick={() => {
                    setSelectedYear(selectedYear === year ? null : year);
                    setSelectedCategory(null);
                    setFilterVisible(false);
                  }}
                >
                  {year}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="track"
          className={`relative border-20 border-puple mt-28 all ${
            filterVisible ? "" : "hidden"
          }`}
        >
          <div
            id="anchor"
            className="min-h-screen w-full top-50 sticky overflow-hidden border-3 border-puple"
          >
            {yearData.map((image, index) => (
              <div
                className="sticky top-10 border-3 border-white"
                key={image.id}
              >
                <div
                  id="card"
                  className="top-50 w-64 custombp:h-80 custombp:top-[1260px] custombp2:h-60 custombp2:w-60 custombp2:top-[930px] h-96 absolute group/item top-[1544px] left-1/2 transition-transform duration-300 ease-in-out cursor-grab active:cursor-grabbing select-none"
                  style={{
                    transformOrigin: "top left",
                    transform: `rotate(${
                      rotation + index * rotationStep
                    }deg) translate(-50%, -350%)`,
                  }}
                >
                  <Link key={`link${index}`} to={`/calendars/${image.slug}`}>
                    <p className="bg-black text-h5 duration-300 text-white absolute uppercase tracking-wider bottom-0 opacity-0 group-hover/item:opacity-100 transition-opacity -translate-x-1/2 left-1/2 py-4 w-full text-center shadow-2xl font-black">
                      {image.name}
                    </p>
                  </Link>
                  <img
                    key={`image${index}`}
                    src={image.url}
                    className="object-cover w-full h-full pointer-events-none select-none"
                    alt={`item${index}`}
                  />
                  <p
                    key={`year${index}`}
                    className="absolute m-0 p-0 -z-10 font-bold text-h4 tracking-tighter text-gradient-custom -top-12 translate-x-1/2 right-1/2 select-none pointer-events-none"
                  >
                    {image.Year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div> 

        <div
          className={`grid  xl:grid-cols-3 md:grid-cols-2 2xl:grid-cols-4 md:gap-8 gap-12  container mx-auto filter mt-56 py-12 ${
            !filterVisible ? "" : "hidden"
          }`}
        >
          {yearData.map((image, index) => (
              <Link key={`link${index}`} to={`/calendars/${image.slug}`}>
            <div
              key={index}
              className="bg-white mx-auto mt-6 relative"
              style={{ width: "250px", height: "350px" }}
            >
              <p
                key={`year${index}`}
                className="absolute m-0 p-0 -z-10 font-bold text-h4 tracking-tighter text-gradient-custom -top-12 translate-x-1/2 right-1/2 select-none pointer-events-none"
              >
                {image.Year}
              </p>
              <div className="aspect-w-9  aspect-h-16 bg-gray-200  shadow-md">
                <div
                  className="bg-cover  bg-center w-[250px] h-[300px]"
                  style={{
                    backgroundImage: `url(${image.url})`,
                  }}
                ></div>
              </div>
              <button className="relative flex h-[50px] w-[100%] items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]">
                <span className="relative z-10 text-h6 ">{image.name}</span>
              </button>
            </div>
            </Link>
          ))}
          {/* </div> */}
        </div>

        <FooterHeader />
      </main>
    );
  };

  return <Card />;
};

export default Cd;
