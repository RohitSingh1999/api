import React, { useEffect, useState } from "react";
import { AllMagazineData } from "../../Constant/Magazine";
import { Link, useLocation } from "react-router-dom";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import WebitorialSidebar from "../Webitorial/WebitorialSideBar";
import Heading from "../../Common/Heading";
import ReactPaginate from "react-paginate";

const MagazinePage = () => {

  const location = useLocation();
  const query = new URLSearchParams(location.search);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const [isHovepurple, setIsHovepurple] = useState(Array(AllMagazineData.length).fill(false));
  const handleMouseEnter = (index) => {
    const updatedIsHovepurple = [...isHovepurple];
    updatedIsHovepurple[index] = true;
    setIsHovepurple(updatedIsHovepurple);
  };

  const handleMouseLeave = (index) => {
    const updatedIsHovepurple = [...isHovepurple];
    updatedIsHovepurple[index] = false;
    setIsHovepurple(updatedIsHovepurple);
  };

  const [selectedYear, setSelectedYear] = useState("All");
  const [currentPage, setCurrentPage] = useState(parseInt(query.get('page')) || 0);
  const usersPerPage = 12;
  const offset = currentPage * usersPerPage;

  const filteredData = selectedYear === "All"
    ? AllMagazineData.flatMap((item) => item.months || [])  // Add a nullish coalescing operator to handle potential undefined months
    : AllMagazineData.flatMap((item) => item.months || []).filter((item) => item.magyear === selectedYear);


  const currentUsers = filteredData.slice(offset, offset + usersPerPage);
  const pageCount = Math.ceil(filteredData.length / usersPerPage);

  const webitorial = [
    { country_name: "2024" },
    { country_name: "2023" },
    { country_name: "2022" },
    { country_name: "2021" },
    { country_name: "2020" },
    { country_name: "2019" },
  ];

  useEffect(() => {
    scrollToTop();
  }, [currentPage, selectedYear]);

  const handlePageChange = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    const queryParams = new URLSearchParams(location.search);
    queryParams.set('page', selectedPage);
    queryParams.set('year', selectedYear); // Include selected year in query params
    window.history.pushState(null, null, `${location.pathname}?${queryParams.toString()}`);
  };
  
  return (
    <>
      <WebitorialSidebar />
      <div className="mt-32 lg:mt-36">
        <div className="lg:container px-6 mx-auto box-border">
          <div className="flex md:flex-row flex-col items-start justify-between gap-4 md:my-16 mb-6">
            <div className="md:text-h3 text-h4 font-bold">
              <Heading HeadingText="Magazines" />
            </div>
            <div className="flex flex-wrap items-start justify-start py-4 gap-2 lg:gap-2">
              <div
                className={`bg-gray-200 border border-gray-300 px-2 lg:py-2 py-flex items-center justify-center cursor-pointer ${selectedYear === "All" ? "border border-purple text-purple" : ""
                  }`}
                onClick={() => setSelectedYear("All")}
              >
                All
              </div>
              {webitorial.map((country, index) => (
                <div
                  key={index}
                  className={`border px-2 lg:py-2 flex cursor-pointer ${selectedYear === country.country_name ? "border border-purple text-purple" : ""
                    }`}
                    onClick={() => {
                      setSelectedYear(country.country_name);
                      setCurrentPage(0); 
                    }}
                    
                >
                  {country.country_name}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 xl:px-2">
        <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10">
          {currentUsers.map((item, index) => (
            <Link key={item.id} to={`/monthly-gazette/${item.slug}`} onClick={scrollToTop}>
              <div onClick={scrollToTop}>
                <img
                  src={item.imagelinks}
                  alt="magazine"
                  className="h-full w-full  "
                />

                <button
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  className="relative flex h-[50px] w-full items-center font-bold justify-center overflow-hidden bg-purple text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]"
                >
                  <span className="relative z-10 text-h6 ">
                    {isHovepurple[index] ? "Read More" : `${item.slug}`}
                  </span>
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div id="react-paginate" className="py-10 flex justify-center">
        <ReactPaginate
          previousLabel={"Prev.."}
          nextLabel={"Next.."}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"paginate-prev"}
          nextClassName={"paginate-next"}
        />
      </div>
      <FooterHeader />
    </>
  );
};

export default MagazinePage;
