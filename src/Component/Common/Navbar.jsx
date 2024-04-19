import React, { useState, useRef, useEffect } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import "../../Css/navbar.css";
import Btn from "./Btn";
import Space from "./Space";
const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleLinkClick = () => {
    scrollToTop();
    setActiveIndex(null); // Resetting activeIndex to close the accordion
    toggleSidebar();
  };

  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const [activeIndex, setActiveIndex] = useState(null);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRefPrint = useRef(null);
  const contentRefDigital = useRef(null);
  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    if (activeIndex === 0 && contentRefPrint.current) {
      setContentHeight(contentRefPrint.current.scrollHeight);
    } else if (activeIndex === 1 && contentRefDigital.current) {
      setContentHeight(contentRefDigital.current.scrollHeight);
    }
  }, [activeIndex]);

  
  return (
    <>
      <Space />
      <section className="fixed z-[100] lg:top-0 top-[-5px] container-fluid w-full shadow-xl">
        <nav className="relative z-[100] text-white bg-black ">
          <div className="lg:container mx-auto flex  items-center justify-between text-white">
            <NavLink to="/">

            <div className="relative block p-4 lg:p-4 text-h6  z-50">
              
              <img
                className="xl:h-12 h-16 object-fill sm:w-84"
                    src="https://wmhindia.s3-eu-central-2.ionoscloud.com/logos/Logo%20White.png"
                alt="World Model Hunt"
              />
            </div>
            </NavLink>
            <ul className="lg:flex hidden  item-center justify-center">
              <li className="">
                <NavLink
                  to="/"
                  onClick={scrollToTop}
                  className={
                    location.pathname === "/"
                      ? "relative block my-4 mx-4 py-2 text-p font-normal  border-b-2  border-purple"
                      : "relative block my-4 mx-4 py-2 text-p font-normal hover:text-purple  text-white"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="hoverable group-hover/item1 hover:text-white">
                <p className="relative block my-4 mx-4  py-2 text-p font-normal  text-white hover:text-purple">
                  Print
                </p>
                <div className="p-3 group-hover/item2 mega-menu shadow-xl bg-black z-50 mb-3">
                  <div className="container h-full mx-auto w-full flex flex-wrap justify-between z-50 transform transition duration-500">
                    <div className="w-full ml-4 text-white">
                      <h2 className="font-semibold text-h4">Print</h2>
                      <p>
                        Own a piece of World Model Hunt today with our fashion
                        magazines and calendars – available for purchase now!
                      </p>
                    </div>

                    <ul className="px-4 h-[25rem] w-full sm:w-1/2 lg:w-1/2 border-b lg:border-b-0 lg:border-r  pb-6 pt-6 lg:pt-3">
                      <NavLink to="/monthly-gazette" onClick={scrollToTop} >
                        <div className="flex items-center"></div>
                        <h1 className="text-h4 font-bold">Magazine</h1>
                        <div className="navbarmagzine2 h-[80%] w-full"></div>
                        <div className="mt-3 mb-3">
                          <span className="text-black bold border-b-2">
                            Find out more..
                          </span>
                        </div>
                        <div className="flex items-center py-3"></div>
                      </NavLink>
                    </ul>
                   
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/2 pb-6 pt-6 lg:pt-3">
                    <NavLink to="/spotlight" onClick={scrollToTop}>
                    <h4 className="text-h4 font-bold">Gallery</h4>
                        <div className="flex items-center"></div>
                        <div className="navbarcalendar2 h-[80%] w-full"></div>
                        <div className="mt-3">
                          <span className="text-black bold border-b-2">
                            Find out more..
                          </span>
                        </div>
                      </NavLink>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="hoverable group-hover/item2 bg-black hover:text-white">
                <p className="relative block my-4 mx-4 py-2 text-p font-normal lg:text-base  text-white hover:text-purple">
                  Digital
                </p>
                <div className="p-6 mega-menu mb-16 lg:mb-0 shadow-xl bg-black text-white ">
                  <div className="container mx-auto w-full flex flex-wrap justify-between">
                    <div className="w-full text-white mb-4 px-4">
                      <h2 className="font-semibold text-h4">Digital</h2>
                      <p>
                        Discover and enjoy talk shows, webitorials, magazines,
                        and calendars anytime, anywhere!
                      </p>
                    </div>

                    <ul className="px-4 w-full lg:w-1/5 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3 ">
                      <NavLink to="/monthly-gazette" onClick={scrollToTop}>
                        <h4 className="text-h4 cursor-pointer font-bold">
                          Magazine
                        </h4>
                        <div className="navbarmagzine h-64 w-[100%]"></div>
                        <div className="flex items-center py-3">
                          <span className="text-white bold border-b-2">
                            Find out more..
                          </span>
                        </div>
                      </NavLink>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                      <NavLink to="/calendars" onClick={scrollToTop}>
                        <h4 className="text-h4 font-bold">Web Stories</h4>
                        <div className="navbarcalendar h-64 w-[90%]"></div>
                        <div className="flex items-center py-3">
                          <span className="text-black bold border-b-2">
                            Find out more...
                          </span>
                        </div>
                      </NavLink>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                      <Link to="/talkshow" onClick={scrollToTop}>
                        <h4 className="text-h4 font-bold">Talkshow</h4>

                        <div className="navbartalkshow h-64 w-[90%]"></div>
                        <div className="flex items-center py-3">
                          <span className="text-white bold border-b-2">
                            Find out more...
                          </span>
                        </div>
                      </Link>
                    </ul>
                    <ul className="px-4 w-full sm:w-1/2 lg:w-1/5 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                      <NavLink to="/webinterviews" onClick={scrollToTop}>
                        <h4 className="text-h4 font-bold">Webitorial</h4>
                        <div className="navbartalwebitorials h-64 w-[90%]"></div>
                        <div className="flex items-center py-3">
                          <span className="text-white bold border-b-2">
                            Find out more...
                          </span>
                        </div>
                      </NavLink>
                    </ul>
                    {/* New gallery section */}
                    
                  </div>
                </div>
              </li>

              <li>
                <NavLink
                  to="/style-stories"
                  onClick={scrollToTop}
                  className={
                    location.pathname === "/style-stories"
                      ? "relative block my-4  py-2 text-p font-normal mx-4 border-b-2 border-purple"
                      : "relative block my-4  py-2  mx-4 text-p font-normal  text-white hover:text-purple"
                  }
                >
                  Blog
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/founders"
                  onClick={scrollToTop}
                  className={
                    location.pathname === "/founders"
                      ? "relative block my-4 mx-4 py-2 text-p font-normal  border-b-2 border-purple"
                      : "relative block my-4 mx-4 py-2   text-p font-normal text-white hover:text-purple"
                  }
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/get-in-touch"
                  onClick={scrollToTop}
                  className={
                    location.pathname === "/get-in-touch"
                      ? "relative block my-4 mx-4 py-2 text-p font-normal  border-b-2 border-purple"
                      : "relative block my-4 mx-4 py-2   text-p font-normal  text-white hover:text-purple"
                  }
                >
                  Contact
                </NavLink>
              </li>

            

              <li className="my-auto mx-3">
                <NavLink to="/submission" onClick={scrollToTop}>
                  <Btn btname="Get Published" />
                </NavLink>
              </li>
            </ul>
            <div className="lg:hidden mt-2 mr-4">
              <button
                onClick={toggleSidebar}
                className="focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div
                  className={`w-7 h-1 bg-black rounded-full transition-all duration-500 ${
                    isSidebarOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                ></div>
                <div
                  className={`w-7 h-1 bg-black rounded-full my-1 transition-all duration-500 ${
                    isSidebarOpen ? "opacity-0" : ""
                  }`}
                ></div>
                <div
                  className={`w-7 h-1 bg-black rounded-full transition-all duration-500 ${
                    isSidebarOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                ></div>
              </button>
            </div>
          </div>

          {/* Toggles To Mobile Menu Sidebar */}
          <div
            className={`fixed top-0 right-0 min-h-screen w-[20rem] z-[2000] bg-white shadow-2xl text-black transform ease-in-out transition-transform duration-200 ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } z-10 lg:hidden`}
          >
            <div className="p-4 overflow-y-scroll h-[100vh]">
              <div className="flex items-center justify-between">
                <div className="text-h5 font-bold mb-4"></div>
                <div className="lg:hidden mt-4">
                  <button
                    onClick={toggleSidebar}
                    className="focus:outline-none"
                    aria-label="Toggle Menu"
                  >
                    <div
                      className={`w-7 h-1 bg-black rounded-full transition-all duration-500 ${
                        isSidebarOpen ? "rotate-45 translate-y-2" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-7 h-1 bg-black rounded-full my-1 transition-all duration-500 ${
                        isSidebarOpen ? "opacity-0" : ""
                      }`}
                    ></div>
                    <div
                      className={`w-7 h-1 bg-black rounded-full transition-all duration-500 ${
                        isSidebarOpen ? "-rotate-45 -translate-y-2" : ""
                      }`}
                    ></div>
                  </button>
                </div>
              </div>
              <ul className="py-2">
                <li className="px-2 py-2 cursor-pointer text-h5 font-semibold">
                  <NavLink to="/" onClick={handleLinkClick}>
                    Home
                  </NavLink>
                </li>
                <li className="py-2">
                  <div className="mx-auto font-poppins" id="faqs">
                    <div className="rounded-md">
                      <div
                        className={`flex items-center justify-between px-2 cursor-pointer ${
                          activeIndex === 0 ? "bg-black text-white" : ""
                        }`}
                        onClick={() => toggleAccordion(0)}
                      >
                        <p className="text-h5 font-semibold">Print</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className={`h-6 w-6 transition-transform duration-500 ${
                            activeIndex === 0 ? "rotate-180" : ""
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      <div
                        className="faq-content"
                        style={{
                          maxHeight:
                            activeIndex === 0 ? `${contentHeight}px` : "0",
                          overflow: "scroll",
                          transition: "max-height 0.3s ease-in-out",
                        }}
                        ref={contentRefPrint}
                      >
                        <ul className="space-y-2 mt-3 indent-2 text-h6">
                          <li>
                            <NavLink to="/monthly-gazette" onClick={handleLinkClick}>
                              <span>Magazine</span>
                              <div className="h-36 navbarmagzine2 w-full"></div>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink to="/calendars" onClick={handleLinkClick}>
                              <span>Calendar</span>
                              <div className="h-36 navbarcalendar2 w-full"></div>
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div
                    className={`flex items-center justify-between cursor-pointer px-2 ${
                      activeIndex === 1 ? "bg-black text-white" : ""
                    }`}
                    onClick={() => toggleAccordion(1)}
                  >
                    <h2 className="text-h5 font-semibold">Digital</h2>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-6 w-6 transition-transform duration-500 ${
                        activeIndex === 1 ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                  <div
                    className="faq-content"
                    style={{
                      maxHeight: activeIndex === 1 ? `${contentHeight}px` : "0",
                      overflow: "scroll",
                      transition: "max-height 0.3s ease-in-out",
                    }}
                    ref={contentRefDigital}
                  >
                    <ul className="grid grid-cols-2 gap-2 mt-3 indent-2 text-h6 overflow-scroll">
                      <li>
                        <NavLink to="/monthly-gazette" onClick={handleLinkClick}>
                          <span>Magazine</span>
                          <div className="h-36 navbarmagzine w-full"></div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/calendars" onClick={handleLinkClick}>
                          <span>Calendar</span>
                          <div className="h-36 navbarcalendar w-full"></div>
                        </NavLink>
                      </li>
                      <li>
                        <Link to="/talkshow" onClick={handleLinkClick}>
                          <span>Talkshow</span>
                          <div className="h-36 navbartalkshow w-full"></div>
                        </Link>
                      </li>
                      <li>
                        <NavLink to="/webinterviews" onClick={handleLinkClick}>
                          <span>Webitorial</span>
                          <div className="h-36 navbartalwebitorials w-full"></div>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/spotlight" onClick={handleLinkClick}>
                          <span>Gallery</span>
                          <div className="h-36 navbargallery w-full"></div>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </li>
                
                <li className="px-2 py-2 cursor-pointer text-h5 font-semibold">
                  <NavLink to="/style-stories" onClick={handleLinkClick}>
                    Blog
                  </NavLink>
                </li>
                <li className="px-2 py-2 cursor-pointer text-h5 font-semibold">
                  <NavLink  to="/founders" onClick={handleLinkClick}>
                    {" "}
                    About
                  </NavLink>
                </li>
                <li className="px-2 py-2 cursor-pointer text-h5 font-semibold">
                  <NavLink to="/get-in-touch" onClick={handleLinkClick}>
                    {" "}
                    Contact
                  </NavLink>
                </li>
                <li className="px-2 py-2 cursor-pointer text-h5 font-semibold">
                  <NavLink to="/submission" onClick={handleLinkClick}>
                    <Btn btname="Submission" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;