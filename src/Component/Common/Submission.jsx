import { React, useState } from "react";
import { Link } from "react-router-dom";
import Heading from "./Heading";
import Btn from "./Btn";
import FooterHeader from "./FooterCommon/FooterHeader";

const Submission = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-3 ">
        <p className="mt-32">
          {" "}
          <Heading HeadingText="Submissions" />
        </p>
      </div>
      <div
        className="container-fluid h-max py-10 text-white
"
      >
        <div className=" lg:w-1/2 md:2/3 h-[500px] bg-dimblack lg:mx-auto mx-6 flex items-center justify-center ">
          <div className="w-6/7 space-y-8 ">
            <p className="text-white font-poppins uppercase pb-3 font-semibold text-center md:text-h4 text-h5">
              submit with kavyar{" "}
              <div className="border-b-4 border-purple w-[60px] pt-2 mx-auto"></div>
            </p>

            <p className="text-white text-center font-poppins text-p w-5/6 mx-auto">
              You can submit your pictures for publications on kavyar and have
              our team review it there. Once the pictures are accepted you will
              recieve a notification on kavyar .
            </p>
            <Link
              to="https://kavyar.com/world-model-hunt-magazine"
              target="_blank"
            >
              <div className="flex items-center justify-center mt-10">           
                  <Btn btname="Submit Now" />             
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="  h-max py-6 text-white">
        <div className="max-w-screen-xl mx-auto h-min px-6">
          <div>
            <p className="md:text-h4 lg:text-h3 text-h4 font-bold font-sans  leading-[3rem]]">
              Submit your Pictures or Articles{" "}
            </p>
            <div className="border-b-4 border-gray-100 w-[60px] pt-2 border-opacity-50"></div>
          </div>
          <p className="text-h5 font-poppins leading-[1.9rem]  font-sans opacity-75 pt-6">
            Getting published on World Model Hunt Magazine is easy . Submit
            throught easy to fill forms ansd our team will reach back to you
            with more information
          </p>
          <div className="py-8">
            <div className="lg:flex grid gap-3 ">
              <p className="font-semibold text-h4 font-poppins lg:w-2/5 ">
                Submission guidelines
                <div className="border-b-4 border-gray-100 w-[60px] pt-2 border-opacity-50"></div>
              </p>
            </div>
            <p className=" text-p leading-[1.5rem] pt-4">
              We do not publish work that promotes racism, misogny , homophobia
              , transphobia,or any form of prejudice aganist any group of people
            </p>
          </div>
          <p className=" text-h5 font-bold leading-[1.5rem]">
            Guidelines :
          </p>
          <p className=" text-p leading-[1.5rem] mt-3">
            All submissions are welcomed whether they are from photographers,
            models, make-up artists, designers etc. We would prefer exclusive
            content but not required.
          </p>
          <p className=" text-p leading-[1.5rem]">
            We accept variety submissions where you can submit pictures form
            various shoots.
          </p>
          <p className="text-p leading-[1.5rem]">
            After the release of an issue, the direct link for the purchase from
            magcloud will be sent on the date of release. You'll also receive
            High-Res Cover Tear Sheets of your work in PDF format in a couple of
            days after the release.
          </p>
          <div className="my-6">
            <p className=" text-p leading-[1.5rem]">
              {" "}
              We hold the right to rejection and can reject the submissions on
              the following grounds: -
            </p>
            <ul className="list-disc text-clip list-outside  pl-5 md:pl-10 lg:pl-14 text-p mt-3">
              <li className="mb-2 md:mb-3 lg:mb-1">Low Quality Shots</li>
              <li className="mb-2 md:mb-3 lg:mb-1">
                Images containing watermarks or logos
              </li>
              <li className="mb-2 md:mb-3 lg:mb-1">Repeated poses</li>
              <li className="mb-2 md:mb-3 lg:mb-1">
                Images are not properly retouched and edited
              </li>
              <li className="mb-2 md:mb-3 lg:mb-1">
                Submission does not fit the issue type
              </li>
              <li className="mb-2 md:mb-3 lg:mb-1">
                Submission title and credits are missing, or credits are
                not sent properly.
              </li>
              <li className="mb-2 md:mb-3 lg:mb-1">
                Prior complaints regarding any misconduct.
              </li>
            </ul>
          </div>
          <div className="">
            <p className=" text-h5 font-bold leading-[1.5rem]">
              Special Note :
            </p>
            <p className="text-p leading-[1.5rem] mt-3">
              Credits for the work submitted should be sent properly, the
              Instagram handles of the all-team members should be provided, and
              title is must for all the submissions. Also make sure that all the
              Instagram handles are correct. For any corrections to be made,
              corrections must be done before the deadline we don't take any
              responsibility afterwards.
            </p>
          </div>
        </div>

        <div className="contianer-fluid  h-max py-10">
          <div className="container mx-auto h-min lg:w-2/3 md:w-3/4 sm:w w-5/6 space-y-5 pb-6">
            <h1 className="md:text-h4 lg:text-h3 text-h5 font-bold font-sans  text-center">

              Submissions
            </h1>
            <p className=" text-p leading-[1.5rem] my-3 text-center pb-8">
              Each submissions have guidelines described for better chances for
              approval. If all guidelines are met, it doesn't mean that your
              submission is approved. The approval for submission is based on
              various factors, inclusive of monetary gains to the publisher.
            </p>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 text-center itmes-center justify-center h-min xl:gap-8 lg:gap-3 gap-4 ">
              <div className=" lg:h-[450px] shadow-2xl transform transition-transform hover:scale-105 duration-300 ease-in-out bg-darkgray">
                <div className="md:w-full h-[430px] b mx-auto flex items-center justify-center">
                  <div className="w-6/7 px-3 space-y-6">
                    <h1 className=" font-semibold font-poppins pb-3 text-center text-h5 leading-[1.9rem]">
                      Print Magazine <br /> Sub
                      <span className="border-b-2 pb-2">mis</span>sion{" "}
                    </h1>
                    <p className=" text-center font-poppins text-p">
                      Submissions accepted on Kavyar or Directly With WMH
                    </p>
                    <Link
                      to="https://kavyar.com/world-model-hunt-magazine"
                      target="_blank"
                    >
                      <div className="flex items-center justify-center mt-4">
                          <Btn btname="Get Published" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className=" h-[450px] shadow-2xl  transform transition-transform hover:scale-105 duration-300 ease-in-out bg-darkgray">
                <div className="w-full  h-[440px] mx-auto flex items-center justify-center">
                  <div className="w-6/7 px-3 space-y-6">
                    <h1 className="text-white font-poppins pb-3 text-center text-h5 font-semibold leading-[1.9rem]">
                      We<span className="border-b-2 pb-2">bitor</span>ials
                    </h1>
                    <p className="text-center font-poppins text-p leading-[1.5rem]">
                      Submit your details for our team to reach back to you.
                      Writing charges will be charged for the webitorials
                    </p>
                    <div className="flex items-center justify-center">
                      <button
                        disabled
                        className="cursor-not-allowed opacity-50 relative flex h-[50px] w-40 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear"
                      >
                        <span className="relative z-10 text-h6 ">
                          Apply Now
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className=" shadow-2xl h-[450px]  transform transition-transform hover:scale-105 duration-300 ease-in-out bg-darkgray">
                <div className="w-full  h-[430px] b mx-auto flex items-center justify-center">
                  <div className="w-6/7 px-3 space-y-8">
                    <h1 className="font-poppins pb-3 text-center text-h5 font-semibold leading-[1.9rem]">
                      Tal<span className="border-b-2 pb-2">k Sh</span>ow{" "}
                    </h1>
                    <p className="text-center font-poppins  text-p leading-[1.5rem]">
                      For invitation to model insights talk show apply on the
                      form below.
                    </p>
                    <div className="flex items-center justify-center">
                      <button
                        disabled
                        className="cursor-not-allowed opacity-50 relative flex h-[50px] w-40 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear"
                      >
                        <span className="relative z-10 text-h6 ">
                          Apply Now
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterHeader />
    </>
  );
};

export default Submission;
