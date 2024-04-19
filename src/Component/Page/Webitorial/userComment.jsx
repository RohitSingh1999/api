import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getComments } from "../../../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";

const userComment = () => {

    const { WebitorialId } = useParams();
  const webitorialcomment = useSelector((state) => state.webitorialReducer.comments);
  const dispatch = useDispatch();


  useEffect(() => {
    const fetchData = async () => {
      if (WebitorialId !== undefined) {
        try {
         await dispatch(getComments(WebitorialId));
        } catch (error) {
          console.error("Error fetching blog data:", error);
        }
      }
    };
  
    fetchData();
  }, [dispatch, WebitorialId]);
  

  if(!webitorialcomment || webitorialcomment.length === 0)
  {
    return <div>No Comments</div>;
  }

  return (
    <div className="mb-4">
    {webitorialcomment.length > 0 ?
  webitorialcomment.map((data, index) => (
    <>
    <div className="flex items-start mb-4">
      <img
        src="https://source.unsplash.com/random"
        alt="User"
        className="w-12 h-12 mr-4"
      />
      <div>
        <h3 className="font-bold ">{data.webitorial_username}</h3>
        <p>
        {data.webitorial_comment}
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

export default userComment