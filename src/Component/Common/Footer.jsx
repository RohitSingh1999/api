import React, { useState } from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPinterest } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import axios from "axios";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Initialize values state
  const [values, setValues] = useState({
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

     if (values.email.trim() === '') {
      setErrors({ email: 'Please provide an email' });
      return;
    } else {
      setErrors({});
    }

    try {
      await axios.post('https://worldmodelhunt.com/api/contact/subscribe', values);
      setSuccessMessage('Thank you for subscribing!');
      setValues({
        email: '',
      });
    } catch (error) {
      console.error('Error posting contact:', error);
    }
  };
  

  return (
    <>
      <section className="h-[90%] footer-section">
        <footer className="text-white font-poppins xl:pt-48 lg:pt-36 md:pt-24 pt-12 pb-6">
          <div className="container mx-auto md:py-6 lg:py-0">
            <div className=" grid md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-8 ">
              <Link
                to="/"
                className="max-w-[220px] flex items-center col-span-2 sm:col-span-1 md:pt-0 pt-10"
              >
                <img
                  src="https://wmhindia.s3-eu-central-2.ionoscloud.com/logos/Logo%20White.png"
                  alt="footer_-logo"
                  className="mx-44 lg:mx-0 "
                />
              </Link>
              <div className="mt-5 mx-8  lg:ml-auto md:mx-auto">
                <p className="sm:mb-10 mb-6 text-p font-bold whitespace-nowrap">Useful Links</p>
                <ul>
                  <Link to="/">
                    <li
                      className="text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Home
                    </li>
                  </Link>
                  <Link to="/spotlight">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Gallery
                    </li>
                  </Link>
                 
                  <Link to="/webinterviews">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Webitorials
                    </li>
                  </Link>
                  <Link to="/get-in-touch">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="mt-[36%]  md:mx-auto">
                <ul>
                  <Link to="/monthly-gazette">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Magazines
                    </li>
                  </Link>
                  <Link
                    to="/submission"
                  >
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Get Published
                    </li>
                  </Link>
                  <Link to="/founders">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      About
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="mt-[36%]  mx-8 lg:ml-auto md:mx-auto">
                <ul>
                  <Link to="/calendars">
                    {/* <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Calendars
                    </li> */}
                  </Link>
                  <Link to="/style-stories">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Blogs
                    </li>
                  </Link>
                  <Link to="/get-in-touch">
                    <li className="mt-4 text-p hover:text-purple transition duration-300 ease-in-out" onClick={scrollToTop}>
                      Advertise with us
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="mt-[36%]  lg:ml-auto md:mx-auto">
                <ul>
                  <Link to="/talkshow">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out "
                      onClick={scrollToTop}
                    >
                      TalkShow
                    </li>
                  </Link>
                  <Link to="/privacy">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Privacy & Policy
                    </li>
                  </Link>
                  <Link to="/terms">
                    <li
                      className="mt-4 text-p hover:text-purple hover:cursor-pointer transition duration-300 ease-in-out"
                      onClick={scrollToTop}
                    >
                      Terms & Conditions
                    </li>
                  </Link>
                </ul>
              </div>
              <Link to="/founders/reggie-gardner" onClick={scrollToTop}>
              <div className="lg:ml-auto md:mx-auto mt-[45%] sm:ml-0 ml-6 cursor-pointer">
                <img
                  src="https://s3.amazonaws.com/wmh.all.posts/static_images/footer/footer_barcode.png"
                  alt="footer"
                  className="w-40 h-24 "
                />
              </div>
              </Link>
            </div>

            <div className=" grid  md:grid-cols-2 grid-cols-1 mt-32">
              <div >
                <div className="flex sm:px-2 px-3 box-border">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    autoComplete ="false"
                    value={values.email}
                    onChange={e => setValues({...values, email: e.target.value})}
                    placeholder="Enter your email"
                    pattern="[^\s@]+@[^\s@]+\.[^\s@]+"
                    className="text-p text-black bg-white outline-none sm:px-4 px-2 w-[80%] lg:w-[38%] lg:px-14 xl:px-8 hover:bg-opacity-90"
                  />
                  <div className="text-base font-medium text-white bg-purple hover:bg-opacity-90"  onClick={handleSubmit}>
                    <Btn btname="Subscribe" />
                  </div>
                </div>

                {errors.email && <span className="text-purple text-sm ml-2">{errors.email}</span>}
               <div className="success-alert p-2">{successMessage}</div>
              </div>

              <div>
                <div className="flex flex-wrap md:justify-end justify-center sm:mr-8 ">
                  <div className="sm:mb-0 mb-3">
                  <p className=" sm:ml-6 md:ml-0 mt-2 text-p font-bold">
                    Follow us on
                  </p>

                  </div>
                  <div className="flex gap-2">

                  <Link
                    to="https://www.facebook.com/worldmodelhunt/"
                    target="blank"
                    className="lg:ml-12 ml-2 md:ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:text-purple  transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UCUCbRH280ivKvLG64Qte_uQ"
                    target="blank"
                    className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:text-purple  transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/worldmodelhunt/"
                    target="blank"
                    className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:text-purple  transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
                  </Link>
                  <Link
                    to="https://www.pinterest.com/worldmodelhunt/"
                    target="blank"
                    className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:text-purple  transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
                  </Link>
                  <Link
                    to="https://www.instagram.com/wmhmagazine/?fbclid=IwAR2UBDGwnKTejpMdKf_zO8kPOd1BkZb9H1JnHC_0tX0eHizWd87b73kI8Sg"
                    target="blank"
                    className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center rounded-full border border-white text-white hover:text-purple transition duration-300 ease-in-out"
                  >
                    <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                  </Link>
                  </div>
                  
                </div>
              </div>
            </div>
            <p className="text-center mt-24 text-p px-6 box-border">
  Copyright{" "}
  <span>
    <Link
      to="/"
      className="hover:border-purple hover:text-purple transition duration-300 ease-in-out"
      onClick={scrollToTop}
    >
      World Model Hunt
    </Link>{" "}
    © 2017-2024. All rights reserved.{" "}
  </span>
  <span>
    Designed by <Link to="https://difm.llc/"  target="_blank" rel="noopener noreferrer" className="border-white hover:border-purple hover:text-purple transition duration-300 ease-in-out">Do It For Me LLC</Link>
  </span>
</p>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
