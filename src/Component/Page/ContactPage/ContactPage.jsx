import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faCopy, faMapMarkerAlt, faClock} from "@fortawesome/free-solid-svg-icons";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import { Link } from "react-router-dom";
import axios from "axios";

const ContactPage = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "info@worldmodelhunt.com";
  const phoneNumber = "+18442883224";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  // Initialize values state
  const [values, setValues] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
     // Validate form fields
    const newErrors = {};
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      newErrors.email = "Invalid email address";
    }
    if (!values.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    }

    // If there are validation errors, set them and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      // Make sure to use the correct API endpoint
      await axios.post("https://worldmodelhunt.com/api/contact/us", values);
      console.log("Message successfully sent");

      // Reset the form after successful submission
      setValues({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error posting contact:", error);
    }
  };

  return (
    <>
      <section className="my-40 font-poppins container text-white mx-auto px-6 box-border">
        <div className=" lg:p-0 ">
          <h2 className="md:text-h4 lg:text-h3 text-h5 font-bold">
            We're thrilled you
            <br />
            reached out!<span className="text-purple"> Let's chat!</span>
          </h2>
          <p className="lg:mt-20 md:mt-12 mt-4 ">
            <span className="underline text-p font-semibold">
              Have questions or need more information?
            </span>
              &nbsp;&nbsp;Feel free to drop us a message with your inquiries, and our team
            will promptly get back to you. Your curiosity is our priority!
          </p>
        </div>

        <div className="grid grid-cols-12 md:mt-5 gap-6 md:px-0  box-border">
          <div className="lg:col-span-6 col-span-12">
            <div className="md:grid md:grid-cols-12 gap-6 ">
              <div className="h-full lg:py-28 py-14 shadow-lg bg-darkgray p-3 flex sm:flex-row flex-col sm:gap-0 gap-3 sm:items-center md:justify-center xl:col-span-6 lg:col-span-8 md:col-span-8 col-span-12">
                <div className="h-10 w-10 rounded-full bg-purple text-white hover:text-purple transition duration-300 ease-in-out">
                  <FontAwesomeIcon
                    className="h-4 m-3"
                    icon={faEnvelope}
                  ></FontAwesomeIcon>
                </div>
                <div className="sm:ml-5 ml-2 ">
                  <p className="text-p font-bold">Email</p>
                  <Link to={`mailto:${emailAddress}`}>{emailAddress}</Link>
                </div>
              </div>

              <div className="contactimage1 h-full w-full shadow-lg xl:col-span-6 lg:col-span-4 md:col-span-4 col-span-12"></div>
            </div>

            <div className="grid grid-cols-12 md:mt-5 gap-6 ">
              <div className="contactimage2 h-full w-full shadow-lg xl:col-span-6 lg:col-span-4 md:col-span-4 col-span-12"></div>

              <div className="h-full lg:py-28 py-14 shadow-lg p-3 bg-darkgray flex sm:flex-row flex-col sm:gap-0 gap-3 sm:items-center md:justify-center xl:col-span-6 lg:col-span-8 md:col-span-8 col-span-12">
                <div className=" h-10 w-10 rounded-full bg-purple  text-white hover:text-purple  transition duration-300 ease-in-out ">
                  <FontAwesomeIcon
                    className="h-4 m-3"
                    icon={faPhone}
                  ></FontAwesomeIcon>
                </div>
                <div className="sm:ml-5 ml-2">
                  <p className="text-p font-bold">Phone</p>
                  <Link to={`tel:${phoneNumber}`}>{phoneNumber}</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-dimblack py-4 h-full lg:col-span-6 col-span-12">
            <form onSubmit={handleSubmit}>
              <p className="text-h6 font-bold ml-7 text-white">
                Drop us a message :
              </p>
              <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 mt-4 sm:mx-7 mx-4">
       
                <p>
                <input
                  type="text"
                  id="name"
                  name="name"
                  aria-describedby="helper-text-explanation"
                  value={values.name}
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  autoComplete="false"
                  className="bg-black text-gray-900 focus:ring-blue-500 outline-none focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name*"
                />
                  <p className="text-purple text-sm">{errors.name}</p>
                  </p>
                  <p>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="false"
                  value={values.email}
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                  aria-describedby="helper-text-explanation"
                  className="bg-black text-gray-900 focus:ring-blue-500 outline-none focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email*"
                />
                 <span className="text-purple text-sm">{errors.email}</span>
                 </p>
              </div>
              <div className="sm:mx-7 mx-4 mt-6">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={(e) =>
                    setValues({ ...values, subject: e.target.value })
                  }
                  autoComplete="false"
                  aria-describedby="helper-text-explanation"
                  className="bg-black text-gray-900 text-p outline-none  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Subject*"
                />
                 <span className="text-purple text-sm">{errors.subject}</span>
              </div>
              <div className="sm:mx-7 mx-4 mt-6">
                <textarea
                  id="message"
                  name="message"
                  autoComplete="false"
                  value={values.message}
                  onChange={(e) =>
                    setValues({ ...values, message: e.target.value })
                  }
                  rows="4"
                  className="block p-2.5 w-full   text-sm text-gray-900 bg-gray-50 outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 bg-black"
                  placeholder="Your Message*"
                ></textarea>
                <p className="text-purple text-sm">{errors.message}</p>
              </div>
              <div className="sm:mx-7 mx-4 mt-5">
                <button
                  type="submit"
                  className="relative flex h-[50px] w-[100%] items-center justify-center overflow-hidden bg-purple font-bold text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]"
                >
                  <span className="relative z-10 text-h6">Send Message</span>
                </button>
              </div>
            </form>
            <div className="mt-20 sm:mx-7 mx-3">
              <p className="text-white text-h6 font-bold sm:px-0  px-">Or email us at :</p>
              <div className="cursor-pointer  bg-gray mt-2 flex  text-white relative py-3 sm:px-3 px-1" onClick={copyToClipboard}
                  disabled={copied}>
                <button
                  className=""
                  
                >
                  <FontAwesomeIcon
                    className="sm:h-6 sm:w-6 w-4 h-4 sm:mr-2 mr-1"
                    icon={faCopy}
                  ></FontAwesomeIcon>
                </button>
                <div className="w-[100%] sm:text-start ">
                {copied ? (
                <p className="text-white">Email copied to clipboard!</p>
                ) : <p>{emailAddress}</p>}

                
                </div>
              </div>
              
            </div>
          </div>
        </div>

        <div className=":col-span-6 mt-6 col-span-12">
          <div className="md:grid md:grid-cols-12 gap-6">
            <div className="h-full lg:py-20 py-14 shadow-lg p-3 bg-darkgray flex sm:flex-row flex-col sm:gap-0 gap-3 sm:items-center md:justify-center xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
              <div className="h-10 w-10 rounded-full bg-purple text-white hover:text-purple transition duration-300 ease-in-out flex items-center justify-center">
                <FontAwesomeIcon
                  className="h-4 m-3"
                  icon={faMapMarkerAlt}
                ></FontAwesomeIcon>
              </div>
              <div className="sm:ml-5 text-white ml-2">
                <p className="text-p font-bold">Location</p>
                <Link
                  to="https://www.google.com/maps?q=611+Reva+Ridge+Dr.,+Stafford,+TX+77477,+United+States"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    611 Reva Ridge Dr.,
                    <br /> Stafford, TX 77477,
                    <br /> United States
                  </p>
                </Link>
              </div>
            </div>

            <div className="h-full lg:p-12 md:p-6 p-3 lg:py-20 py-14 shadow-lg bg-darkgray flex sm:flex-row flex-col sm:gap-0 gap-3 sm:items-center md:justify-center xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
              <div className=" h-10 w-10 rounded-full bg-purple  text-white hover:text-purple  transition duration-300 ease-in-out flex items-center justify-center">
                <FontAwesomeIcon
                  className="h-4 m-3"
                  icon={faClock}
                ></FontAwesomeIcon>
              </div>
              
              <div className="sm:ml-5 text-white ml-2">
              <p className="text-p font-bold">Availability</p>

                <p className="text-justify text-wrap ">
                  24/7 online access, ensuring your modeling aspirations are
                  never limited by time. Book offline appointments at your
                  convenience, available every day of the week. Welcome to
                  WorldModelHunt, where opportunities are open around the clock.
                </p>
              </div>
            </div>
          </div>
        </div>


      </section>
      <FooterHeader />
    </>
  );
};

export default ContactPage;
