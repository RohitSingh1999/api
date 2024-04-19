import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComment } from "../../../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const BlogComment = () => {

    const { BlogId } = useParams();
  const blogcomment = useSelector((state) => state.blogReducer.comment);
  const dispatch = useDispatch();
  console.log("comment:", blogcomment);
  useEffect(() => {
    const fetchData = async () => {
      if (BlogId !== undefined) {
        try {
         await dispatch(getComment(BlogId));
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      }
    };
  
    fetchData();
  }, [dispatch, BlogId]);
  

  if(!blogcomment || blogcomment.length === 0)
  {
    return <div>Loading.............</div>;
  }

  return (
    <div className="mb-4">
    {blogcomment.length > 0 ?
  blogcomment.map((data, index) => (
    <>
    <div className="flex items-start mb-4">
      <img
        src="https://source.unsplash.com/random"
        alt="User"
        className="w-12 h-12 rounded-full mr-4"
      />
      <div>
        <h3 className="font-bold">{data.user_name}</h3>
        <p>
        {data.blog_comment}
        </p>
      </div>
    </div>
    <hr className="my-4 opacity-20" />
    </>
    ))  : "No comments"
  } 
  </div>
  )
}

export default BlogComment