import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getBlog } from "../../../Redux/actions/action";
import { Link } from "react-router-dom";
import Btn from "../../Common/Btn";
import Heading from "../../Common/Heading";
import TiltCard from "../Blog/TitleCard";
import slugify from 'slugify';

const BlogSection = () => {
  const dispatch = useDispatch();
  const cardData = useSelector((state) => state.blogReducer.blog);

 
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  // Check if cardData is still undefined or empty
  if (!cardData || cardData.length === 0) {
    return <div>Loading...</div>;
  }


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
    <section className="px-6 2xl:px-0 my-24 box-border">
       <div className="container mx-auto">
        <div className="text-h3 font-bold font-poppins">
          <Heading HeadingText="Latest Blog" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
      {cardData.slice(0,6).map((data, index) => {
            const slug = slugify(data.blog_title, { lower: true });
            const uniqueKey = `${data.id}-${index}`;
            return (
              <Link to={`/style-stories/${data.blog_id}/${slug}`} onClick={scrollToTop} key={uniqueKey}>
                <TiltCard
                  {...data}
                  className={
                    index === Math.floor(cardData.length / 2) ? "md:mt-8" : ""
                  }
                />
              </Link>
            );
          })}
      </div>
      <Link to="/style-stories" onClick={scrollToTop}>
        <div className="flex items-center justify-center mt-6">
            <Btn btname="View All" />
         </div>
    </Link>
    </section>
  
    </>
  );
};

export default BlogSection;
