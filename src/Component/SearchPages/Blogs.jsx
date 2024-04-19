import React, { useEffect, useState } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getBlog } from "../../Redux/actions/action";
import TiltCard from "../Page/Blog/TitleCard";
import Sidebar from "../Common/Sidebar";
import Heading from "../Common/Heading";
import slugify from 'slugify';

const Blogs = () => {
  const dispatch = useDispatch();
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get('discover');
  const blogSearch = useSelector((state) => state.blogReducer.blog);

  useEffect(() => {
    const regex = new RegExp(searchQuery, 'i');
    const filteredBlogs = blogSearch.filter((blog) => regex.test(blog.blog_title) || regex.test(blog.blog_content) || regex.test(blog.blog_tag));
    setFilteredBlogs(filteredBlogs);
  }, [searchQuery, blogSearch]);
  useEffect(() => {
    dispatch(getBlog());
  }, [dispatch]);

  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
     <Sidebar />
      <section className="mx-3 my-36">
       <div className="container mx-auto">
        <div className="text-h3 font-bold font-poppins">
          <Heading HeadingText="Blogs" />
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 py-12">
  {filteredBlogs.length > 0 ? (
    filteredBlogs.map((data, index) => {
      const slug = slugify(data.blog_title, { lower: true });
      return (
        <Link to={`/style-stories/${data.blog_id}/${slug}`} onClick={scrollToTop} key={data.id}>
          <TiltCard
            key={data.id}
            {...data}
            className={index === Math.floor(filteredBlogs.length / 2) ? "md:mt-8" : ""}
          />
        </Link>
      );
    })
  ) : (
    <p>This Data does not exist!</p>
  )}
</div>

    </section>
    </div>
  );
};

export default Blogs;
