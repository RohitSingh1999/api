import React, { useState, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSingleBlog } from "../../../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "../../Common/Sidebar";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";
import Btn from "../../Common/Btn";
import BlogSection from "../Home/BlogSection";
import CommentForm from "./CommentForm";
import BlogComment from "./BlogComment";

const BlogIndividual = () => {
  const { BlogId } = useParams();
  const singleBlog = useSelector((state) => state.blogReducer.singleBlog);
  const dispatch = useDispatch();
  const blogurl = window.location.href;
  const message = `World Model Hunt: \`${blogurl}\``;

  useEffect(() => {
    const fetchData = async () => {
      if (BlogId !== undefined) {
        try {
          await dispatch(getSingleBlog(BlogId));
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      }
    };

    fetchData();
  }, [dispatch, BlogId]);

  if (!singleBlog || singleBlog.length === 0) {
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
      <Sidebar />
      <div className="lg:h-screen md:h-[80vh] h-[60vh] relative">
        <img
          className="absolute inset-0 w-full h-full object-cover object-top"
          src={singleBlog ? singleBlog.blog_feature_image : ""}
          alt="Blog Feature"
        />
       
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="flex flex-col items-center justify-center container lg:h-screen md:h-[80vh] h-[60vh] max-w-screen-lg mx-auto relative z-10">
          <div className="flex flex-wrap text-white items-center justify-center">
            <p className="mr-4">
              {singleBlog ? singleBlog.formatted_time : ""}
            </p>
            <p className="mr-4">|</p>
            <p className="mr-4">{singleBlog ? singleBlog.category_name : ""}</p>
            <p className="mr-4">|</p>
            <p className="mr-4">
              {" "}
              {singleBlog ? singleBlog.formatted_date : ""}
            </p>
          </div>
          <h1 className="lg:text-h2 md:text-h3 text-h4 font-semibold text-center  text-white mt-10 mb-4">
            {singleBlog ? singleBlog.blog_title : ""}
          </h1>
          <p className="text-lg text-white text-center mb-6">
            By {singleBlog ? singleBlog.name : ""}
          </p>
        </div>
      </div>

      <div
        className="bg-white max-w-screen-md py-4 px-6 box-border my-8 tracking-wide mx-auto text-justify text-pretty"
        dangerouslySetInnerHTML={{ __html: singleBlog.blog_content }}
      ></div>
      <div className="max-w-screen-md mx-auto">
        <div className="flex items-center sm:justify-between justify-center flex-wrap">
        <div className="p-4 rounded-lg flex flex-wrap gap-4">
  {singleBlog ? (
    typeof singleBlog.blog_tag === 'string' ? (
      singleBlog.blog_tag.split(', ').map((tag, index) => (
        <Link to={`/blog/search?discover=${tag}`} onClick={scrollToTop}>
        <div key={index} className="border p-2 border-black border-opacity-35 hover:text-purple cursor-pointer hover:border-purple transition-all duration-300">
          {tag}
        </div>
        </Link>
      ))
    ) : (
      <p className="border p-2 border-black border-opacity-35">Invalid format for blog_tag</p>
    )
  ) : (
    <p className="border p-2 border-black border-opacity-35">No tags available</p>
  )}
</div>

          
          <div className="flex gap-2 justify-end ml-auto mr-8">
            <p className="sm:ml-6 md:ml-0 mt-2 text-p font-bold">Share on</p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <FacebookShareButton
                url={window.location.href}
                title={singleBlog ? singleBlog.blog_title : ""}
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </FacebookShareButton>
            </p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <LinkedinShareButton
                url={window.location.href}
                title={singleBlog ? singleBlog.blog_title : ""}
              >
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </LinkedinShareButton>
            </p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <PinterestShareButton
                url={window.location.href}
                title={singleBlog ? singleBlog.blog_title : ""}
              >
                <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
              </PinterestShareButton>
            </p>

            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <WhatsappShareButton
                url={window.location.href}
                title={singleBlog ? singleBlog.blog_title : ""}
              >
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
              </WhatsappShareButton>
            </p>
          </div>
        </div>
        <hr className="my-4 opacity-20" />
        <div className="flex justify-center items-center">
          <div className="bg-white w-full max-w-screen-xl mx-auto rounded-lg  flex md:flex-row flex-col">
            <div className="md:w-1/4 py-4 px-6">
              <img
                src={singleBlog ? singleBlog.image : ""}
                alt="Person"
                className="rounded-full h-32 w-32 mx-auto my-auto"
              />
            </div>
            <div className="md:w-3/4 py-4 px-6">
              <h1 className="text-2xl font-bold mb-2">
                {singleBlog ? singleBlog.name : ""}
              </h1>
              <p className="mb-4">
                We care about more than fashion. We care about empowerment &
                expression through art.
              </p>
              <p className="font-bold">Author posts</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center max-w-screen-lg px-6 mx-auto py-8  box-border">
        <div className=" w-full bg-white rounded-lg">
          <p className="text-h6 mb-4 font-bold">Add Comments</p>
          <CommentForm />
        </div>
      </div>
      <BlogSection />
      <FooterHeader />
    </>
  );
};

export default BlogIndividual;
