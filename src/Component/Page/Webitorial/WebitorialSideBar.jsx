import React, { useState, useEffect, useRef } from "react";
import Btn from "../../Common/Btn";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";
import slugify from "slugify";
import { useDispatch, useSelector } from "react-redux";
import { fetchWebitorial } from "../../../Redux/actions/action";

const WebitorialSideBar = () => {
  const dispatch = useDispatch();
  const liClasses = " py-2 cursor-pointer";
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [search, setSearch] = useState("");

  const sidebarRef = useRef(null);

  const web = useSelector((state) => state.webitorialReducer.webitorial);


  const countryCount = {};
  if (Array.isArray(web)) {
    web.forEach((webitorial) => {
      const country = webitorial.country_name;
      countryCount[country] = (countryCount[country] || 0) + 1;
    });
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (event) => {
    if (
      isSidebarOpen &&
      sidebarRef.current &&
      !sidebarRef.current.contains(event.target)
    ) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    dispatch(fetchWebitorial());
    document.addEventListener("click", closeSidebar);

    return () => {
      document.removeEventListener("click", closeSidebar);
    };
  }, [dispatch, isSidebarOpen]);
  // show recent blogs
  const showRecentBlogs = () => {
    if (Array.isArray(web)) {
      const startIndex = Math.max(0, web.length - 9); 
    const recentBlogs = web.slice(startIndex, web.length - 4);
    setFilteredBlogs(recentBlogs.reverse());
    } else {
      console.error("web is not an array");
    }
  };
  // show popular blogs
  const showPopularBlogs = () => {
    if (Array.isArray(web)) {
      const sortedBlogs = [...web].sort((a, b) => b.views - a.views);
      setFilteredBlogs(sortedBlogs.slice(0, 5));
    } else {
      console.error("web is not an array");
    }
  };

  useEffect(() => {
    showRecentBlogs();
  }, [web]);

  // Initialize values state
  const [values, setValues] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.email.trim() === "") {
      setErrors({ email: "Please provide an email" });
      return;
    } else {
      setErrors({});
    }

    try {
      await axios.post("https://worldmodelhunt.com/api/contact/subscribe", values);
      setSuccessMessage("Thank you for subscribing!");
      setValues({
        email: "",
      });
    } catch (error) {
      console.error("Error posting contact:", error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div
        id="style16"
        ref={sidebarRef}
        className={`fixed 2xl:bottom-[80px] bottom-[65px] bg-white md:ml-4 ml-2 h-[74vh] overflow-y-scroll z-[100] left-0  duration-150 transition-all ${
          isSidebarOpen ? "sm:w-[22rem] w-[93%]" : "w-0"
        }`}
      >
        <div className="">
          <div className="fixed 2xl:bottom-4 md:bottom-[5px] bottom-[5px]">
            <span
              onClick={toggleSidebar}
              className={`inline-flex 2xl:w-12 2xl:h-12 h-10 w-10    items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 transform transition-transform duration-200 ${
                isSidebarOpen ? "rotate-180" : ""
              }`}
            >
              {isSidebarOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="2xl:w-12 2xl:h-12 h-10 w-10  text-white bg-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="white"
                  className="2xl:w-12 2xl:h-12 h-10 w-10  text-white shadow-2xl bg-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </span>
          </div>
        </div>
        <ul className="sm:px-3 px-2 box-border py-3">
          <li className={liClasses}>
            <div className=" mx-auto mt-6 ">
              <form action="/search" method="GET" className=" ">
                <div className="border">
                  <div className="flex justify-between mx-auto bg-white">
                    <input
                      type="email"
                      placeholder="Search Your Keyword..."
                      className="md:p-3 p-1 text-black outline-none w-[70%] box-border hover:bg-opacity-90"
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link to={`/webitorials/search?discover=${search}`}>
                      <button className="relative flex h-[50px] px-8 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]">
                        <span className="relative z-10 text-h6 ">Search</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </li>
          <li className={liClasses}>
            <div className=" box-border mt-6">
              <div className="flex flex-wrap justify-between">
                <button
                  className="relative flex h-[50px] px-8 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]"
                  onClick={showRecentBlogs}
                >
                  <span className="relative z-10 text-h6 ">Popular</span>
                </button>
                <button
                  className="relative flex h-[50px] px-8 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]"
                  onClick={showPopularBlogs}
                >
                  <span className="relative z-10 text-h6 ">Recent</span>
                </button>
              </div>
              <div>
                {filteredBlogs.map((blog, index) => {
                  const slug = slugify(blog.webitorial_title, { lower: true });

                  return (
                    <div
                      key={index}
                      className="mt-6 mb-4 hover:text-purple cursor-pointer"
                    >
                      <Link
                        to={`/webinterviews/${blog.webitorial_id}/${slug}`}
                        onClick={() => {
                          setIsSidebarOpen(false);
                          scrollToTop();
                        }}                        
                        className="flex items-center gap-2"
                      >
                        <img
                          src={blog.webitorial_image}
                          alt="logo"
                          className="w-[50px] h-[50px] object-cover"
                        />

                        <div className="flex-grow ml-3">
                          <p className="font-bold poppins">
                            {blog.webitorial_title}
                          </p>
                          <p className="text-gray-100">{blog.date}</p>
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          </li>
          <li className={liClasses}>
            <div className="  mx-auto">
              <div className="flex gap-4 mb-2">
              <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/Lines.png" alt="new upadtes" className="lg:h-8 lg:w-6 md:h-10 md:w-8 w-6 h-8" />
                <div className="uppercase text-h5 font-bold">
                  Explore Topics
                </div>
              </div>
              <div className="border-b-2 border-black w-32"></div>
              <div>
                <div className="grid-cols-12 gap-4 grid items-center mt-4 cursor">
                  {Object.keys(countryCount).map((country, index) => [
                    <div className="col-span-10" key={`${index}-category`}>
                      <div className="border-b border-black border-opacity-20 ml-2 mx-auto mb-2 cursor-pointer">
                        <Link to={`/webinterviews/${country}`} onClick={scrollToTop}>
                          <p className="hover:text-purple transition-all duration-300">
                            {country}
                          </p>
                        </Link>
                      </div>
                    </div>,
                    <div className="col-span-2" key={`${index}-count`}>
                      <p className="md:text-h6 text-gray-100 ml-auto text-h6 md:ml-0">
                        ({countryCount[country]})
                      </p>
                    </div>,
                  ])}
                </div>
              </div>
            </div>
          </li>
          <li className={liClasses}>
            <div className=" mx-auto">
              <div className="flex gap-4 mb-2">
              <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/Lines.png" alt="new upadtes" className="lg:h-8 lg:w-6 md:h-10 md:w-8 w-6 h-8" />
                <div className="uppercase text-h5 font-bold">Join Us</div>
              </div>
              <div className="border-b-2 border-black w-32 mb-6"></div>

              <div className="lg:mx-0 pb-3">
                <div className="">
                  <div className="flex border justify-between">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={values.email}
                      onChange={(e) =>
                        setValues({ ...values, email: e.target.value })
                      }
                      className="text- p-3 text-black outline-none w-[70%] box-border hover:bg-opacity-90"
                    />
                    <button
                      className="relative flex h-[50px] px-8 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]"
                      onClick={handleSubmit}
                    >
                      <span className="relative z-10 text-h6 ">Subscribe</span>
                    </button>
                  </div>
                  {errors.email && (
                    <span className="text-purple text-sm ml-2">
                      {errors.email}
                    </span>
                  )}
                  <div className="success-alert p-2">{successMessage}</div>
                </div>
              </div>
            </div>
          </li>
          <li className={liClasses}>
            <div className=" mx-auto">
              <div className="flex gap-4 mb-2">
              <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/Lines.png" alt="new upadtes" className="lg:h-8 lg:w-6 md:h-10 md:w-8 w-6 h-8" />
                <div className="uppercase text-h5 font-bold">Products</div>
              </div>
              <div className="border-b-2 border-black w-32"></div>
              <div className="flex  items-center mt-4 mb-4">
                <div className="flex-grow ml-2 w-[20px] cursor-pointer">
                  <a
                    href="https://www.magcloud.com/browse/issue/2700534"
                    target="__blank"
                  >
                    <p className="font-bold poppins hover:text-purple transition duration-300 ease-in-out">
                      World Model Hunt magazine 2024
                    </p>
                  </a>
                  <p className="">$39.00</p>
                </div>
                <a
                  href="https://www.magcloud.com/browse/issue/2700534"
                  target="__blank"
                >
                  <img
                    src="https://s3.amazonaws.com/wmh.all.posts/Magazines/2024/Jan/January_2024_cover_WHM-US-_1_.webp"
                    alt="logo"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </a>
              </div>
              <hr className="my-4 opacity-20" />
              <div className="flex items-center mt-4 mb-4">
                <div
                  className="flex-grow ml-2 w-[20px] cursor-pointer"
                  target="__blank"
                >
                  <a href="https://www.magcloud.com/browse/issue/2686823">
                    <p className="font-bold poppins hover:text-purple transition duration-300 ease-in-out">
                      World Model Hunt magazine 2023
                    </p>
                  </a>
                  <p className="">$39.00</p>
                </div>
                <a
                  href="https://www.magcloud.com/browse/issue/2686823"
                  target="__blank"
                >
                  <img
                    src="https://s3.amazonaws.com/wmh.all.posts/Magazines/2023/Dec/December_Front_cover_WMH_US.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </a>
              </div>
              <hr className="my-4 opacity-20" />
              <div className="flex items-center mt-4 mb-4">
                <div className="flex-grow ml-2  w-[20px] cursor-pointer">
                  <a
                    href="https://www.magcloud.com/browse/issue/2662794"
                    target="__blank"
                  >
                    <p className="font-bold poppins hover:text-purple transition duration-300 ease-in-out">
                      World Model Hunt magazine 2023
                    </p>
                  </a>
                  <p className="">$39.00</p>
                </div>

                <a
                  href="https://www.magcloud.com/browse/issue/2662794"
                  target="__blank"
                >
                  <img
                    src="https://s3.amazonaws.com/wmh.all.posts/Magazines/2023/Nov/November_Front_cover_WMH_US.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </a>
              </div>
              <hr className="my-4 opacity-20" />
              <div className="flex items-center mt-4 mb-4">
                <div className="flex-grow ml-2 w-[20px] cursor-pointer">
                  <a
                    href="https://www.magcloud.com/browse/issue/2640328?__r=2211629"
                    target="__blank"
                  >
                    <p className="font-bold poppins hover:text-purple transition duration-300 ease-in-out">
                      World Model Hunt magazine 2023
                    </p>
                  </a>
                  <p className="">$39.00</p>
                </div>
                <a
                  href="https://www.magcloud.com/browse/issue/2640328?__r=2211629"
                  target="__blank"
                >
                  <img
                    src="https://s3.amazonaws.com/wmh.all.posts/Magazines/2023/Oct/October-2023.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </a>
              </div>
              <hr className="my-4 opacity-20" />
              <div className="flex items-center mt-4 mb-4">
                <div className="flex-grow ml-2 w-[20px] cursor-pointer">
                  <a
                    href="https://www.magcloud.com/browse/issue/2616743?__r=2211629"
                    target="__blank"
                  >
                    <p className="font-bold poppins hover:text-purple transition duration-300 ease-in-out">
                      World Model Hunt magazine 2023
                    </p>
                  </a>
                  <p className="">$39.00</p>
                </div>
                <a
                  href="https://www.magcloud.com/browse/issue/2616743?__r=2211629"
                  target="__blank"
                >
                  <img
                    src="https://s3.amazonaws.com/wmh.all.posts/Magazines/2023/Sep/sept-2023.png"
                    alt="logo"
                    className="w-[60px] h-[60px] object-contain"
                  />
                </a>
              </div>
              <hr className="my-4 opacity-20" />
            </div>
          </li>
          <li className={liClasses}>
            <div className="  mx-auto relative ">
              {/* <div className="border-b-2 border-black w-32"></div> */}

              <div className="flex justify-center my-2 ">
                <Link
                  to="https://www.facebook.com/worldmodelhunt/"
                  target="blank"
                  className=" flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:text-purple  transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </Link>
                <Link
                  to="https://www.youtube.com/channel/UCUCbRH280ivKvLG64Qte_uQ"
                  target="blank"
                  className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:text-purple  transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                </Link>
                <Link
                  to="https://www.linkedin.com/company/worldmodelhunt/"
                  target="blank"
                  className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:text-purple  transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                </Link>
                <Link
                  to="https://www.pinterest.com/worldmodelhunt/"
                  target="blank"
                  className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:text-purple  transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                </Link>
                <Link
                  to="https://www.instagram.com/wmhmagazine/?fbclid=IwAR2UBDGwnKTejpMdKf_zO8kPOd1BkZb9H1JnHC_0tX0eHizWd87b73kI8Sg"
                  target="blank"
                  className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out"
                >
                  <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                </Link>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default WebitorialSideBar;
