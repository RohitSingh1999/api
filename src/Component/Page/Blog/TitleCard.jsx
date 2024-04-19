import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { getBlog } from "../../../Redux/actions/action";

const TiltCard = ({
  blog_feature_image,
  blog_title,
  formatted_time,
  formatted_date,
  category_name,
  blog_description,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    setTimeout(() => {
      setIsHovered(false);
    });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlog());
  }, []);

  const getShortenedText = (text, length) => {
    if (text.length <= length) {
      return text;
    }
    return text.substring(0, length) + "...";
  };

  return (
    <div
      ref={cardRef}
      className={`relative lg:h-[22rem] md:h-[24rem] min-h-[26rem] w-[100%]  group/item1  md:mx-auto  transform transition-transform duration-500  ${
        isHovered ? "-translate-y-4 rotate-30" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={blog_feature_image}
        alt="Card Background"
        className={`absolute inset-0 w-full h-full object-cover group-hover/item2:h-min shadow-lg transform transition-transform duration-1000 ${
          isHovered ? "-translate-y-20 -rotate-[10deg]" : ""
        }`}
        style={{
          transformOrigin: "bottom left",
          backdropFilter: isHovered ? "blur(50px)" : "none",
        }}
      />
      <div
        className={` group-hover/item2:h-min h-full absolute bottom-0  group-hover/item1:h-min transition-transform transform duration-1000  bg-${
          isHovered ? "white" : "black"
        }  opacity-80 shadow-lg transform ${
          isHovered ? "rotate-6 transition-transform duration-1000" : ""
        }`}
        style={{ transformOrigin: "center center" }}
      >
        <div
          className={`h-full p-4 flex flex-col justify-between items-center ${
            isHovered ? "text-black" : "text-white"
          } rounded-3xl`}
        >
          <div>
            <h2 className="sm:text-h4 text-h5 font-bold mb-2 md:leading-normal leading-tight">
              {getShortenedText(blog_title, 40)}
            </h2>

            <p className="mb-4 ">{getShortenedText(blog_description, 190)}</p>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <button
              className={`flex flex-wrap items-center px-2 border-2 ${
                isHovered ? "border-black" : "border-white"
              }`}
            >
              <span className={isHovered ? "text-black" : "text-white"}>
                {formatted_date}
              </span>
              <span
                className={`mx-2 ${isHovered ? "bg-gray" : "bg-white"} w-2 h-2`}
              ></span>
              <span className={isHovered ? "text-black" : "text-white"}>
                {formatted_time}
              </span>
            </button>

            <button className="flex items-center">
              <span
                className={
                  isHovered
                    ? "text-black border-2 px-2"
                    : "text-white border-2 px-2"
                }
              >
                {category_name}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TiltCard;
