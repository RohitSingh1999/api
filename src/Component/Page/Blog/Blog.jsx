import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlog } from "../../../Redux/actions/action";
import TiltCard from "./TitleCard";
import { Link } from "react-router-dom";
import Heading from "../../Common/Heading";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import Sidebar from "../../Common/Sidebar";
import ReactPaginate from "react-paginate";
import slugify from "slugify";
import AdsComponent from "../../../Ads";

const Blog = () => {
  const dispatch = useDispatch();
  const allBlogData = useSelector((state) => state.blogReducer.blog);

  const [currentPage, setCurrentPage] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const usersPerPage = 12;
  const offset = currentPage * usersPerPage;

  const filteredData = selectedCategory
    ? allBlogData.filter((item) => item.category_name === selectedCategory)
    : allBlogData;

  const currentUsers = filteredData.slice(offset, offset + usersPerPage);

  useEffect(() => {
    dispatch(getBlog(selectedCategory));
  }, [dispatch, selectedCategory]);

  if (!allBlogData || allBlogData.length === 0) {
    return <div><img src="https://s3.amazonaws.com/wmh.all.posts/static_images/loader.svg" alt="loader" className="w-56 h-56"/></div>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0); // Reset current page when changing category
  };

  return (
    <>
      <Sidebar onCategoryClick={handleCategoryClick}/>
      <section className="px-6 box-border mt-36">
        <div className="container mx-auto">
          <div className="lg:flex items-start justify-between gap-6">
            <span className="text-h3 font-bold font-poppins">
              <Heading HeadingText="Blogs" />
            </span>
            <div className="py-4 flex flex-wrap gap-2 lg:gap-2 lg:ml-24">
              <div
                className={`bg-gray-200 border border-gray-300 px-2 lg:py-2 py-flex items-center justify-center cursor-pointer ${!selectedCategory ? 'border border-purple text-purple' : ''}`}
                onClick={() => {
                  setSelectedCategory(null);
                  setCurrentPage(0); // Reset current page when changing category
                }}
              >
                All
              </div>
              {Array.from(new Set(allBlogData.map((category) => category.category_name))).map((uniqueCategory, index) => (
                <div
                  key={index}
                  className={`bg-gray-200 border border-gray-300 px-2 lg:py-2 py- flex items-center justify-center cursor-pointer ${selectedCategory === uniqueCategory ? 'border border-purple text-purple' : ''}`}
                  onClick={() => {
                    setSelectedCategory(
                      selectedCategory === uniqueCategory ? null : uniqueCategory
                    );
                    setCurrentPage(0); // Reset current page when changing category
                  }}
                >
                  {uniqueCategory}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
          {currentUsers.map((data, index) => {
            const slug = slugify(data.blog_title, { lower: true });
            return (
              <Link
                to={`/style-stories/${data.blog_id}/${slug}`}
                onClick={scrollToTop}
                key={data.id}
              >
                <TiltCard
                  {...data}
                  className={
                    index === Math.floor(allBlogData.length / 2) ? "md:mt-8" : ""
                  }
                />
              </Link>
            );
          })}
        </div>
      </section>
      <div
        id="react-paginate"
        className="mb-12 flex justify-center"
        onClick={scrollToTop}
      >
        <ReactPaginate
          previousLabel={"Prev.."}
          nextLabel={"Next.."}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(filteredData.length / usersPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={(data) => setCurrentPage(data.selected)}
          containerClassName={"pagination"}
          activeClassName={"active"}
          previousClassName={"paginate-prev"}
          nextClassName={"paginate-next"}
        />
      </div>

      <AdsComponent dataAdSlot='2745499297'/>
      <FooterHeader />
    </>
  );
};

export default Blog;