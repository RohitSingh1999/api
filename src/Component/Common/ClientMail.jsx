import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";

const ClientMail = () => {
  const [isShowing, setIsShowing] = useState(true);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsShowing(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef]);

  useEffect(() => {
    let html = document.querySelector("html");

    if (html) {
      if (isShowing && html) {
        html.style.overflowY = "hidden";
      } else {
        html.style.overflowY = "visible";
      }
    }
  }, [isShowing]);

  return (
    <>
      {isShowing && typeof document !== "undefined"
        ? ReactDOM.createPortal(
            <div
              className="fixed top-0 left-0 z-20 flex h-screen w-screen items-center justify-center bg-slate-300/20 backdrop-blur-sm font-poppins"
              aria-labelledby="header-2a content-2a"
              aria-modal="true"
              tabIndex="-1"
              role="dialog"
            >
              <div className="relative lg:left-[49%] left-[90%] md:bottom-[21%] bottom-[28%] lg:bottom-[20%]">
                <button
                  onClick={() => setIsShowing(false)}
                  className="inline-flex h-10 bg-light-purple items-center float-right justify-center gap-2 justify-self-center whitespace-nowrap rounded-full px-5 text-sm font-medium tracking-wide  text-emerald-500 transition duration-300 hover:bg-emerald-100 hover:text-emerald-600 focus:bg-emerald-200 focus:text-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-emerald-300 disabled:shadow-none disabled:hover:bg-transparent"
                  aria-label="close dialog"
                >
                  <span className=" only:-mx-5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      role="graphics-symbol"
                      aria-labelledby="title-79 desc-79"
                    >
                      <title id="title-79">Icon title</title>
                      <desc id="desc-79">
                        A more detailed description of the icon
                      </desc>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </span>
                </button>
              </div>

              <div
                className="flex lg:w-[50%] flex-col  overflow-hidden  bg-white text-black shadow-xl shadow-slate-700/10"
                ref={wrapperRef}
                id="modal"
                role="document"
              >
                <div className="grid xl:grid-cols-12 grid-cols-1 gap-1 p-2">
                  <div className="lg:col-span-5 col-span-1 ClientMailimage"></div>

                  <div className="lg:col-span-7 col-span-1 text-center py-16 px-8">
                    <header id="header-2a">
                      <h3 className=" lg:text-h4 text-h5 font-bold uppercase leading-8">
                        Subscribe to our Newsletter
                      </h3>
                    </header>
                    <div id="content-2a" className="flex-1 overflow-auto mt-5">
                      <p className="text-p">
                        Stay in the loop with World Model Hunt! Join our
                        newsletter for timely updates.
                      </p>
                    </div>
                    <form>
                      <div className="mx-7 mt-6">
                        <input
                          type="email"
                          id="email"
                          aria-describedby="helper-text-explanation"
                          className="text-gray-900 text-p text-center border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                          placeholder="Enter your email here"
                        />
                      </div>
                      <div className="mx-7 mt-5">
                        <button className="relative flex h-[50px] w-[100%] items-center justify-center overflow-hidden bg-purple font-bold text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]">
                          <span className="relative z-10 text-h6">
                            Send Message
                          </span>
                        </button>
                      </div>
                    </form>
                    <h3 className="text-h6 font-bold mt-5">No, Thanks</h3>
                  </div>
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
};
export default ClientMail;
