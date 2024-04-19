import React, { useEffect, useState } from "react";
import { TalkShowSeason1, TalkShowSeason2 } from "../../Constant/Talkshow";
import Heading from "../../Common/Heading";

const TalkshowSessions = () => {
  return (
    <>
      <div className="md:container mx-auto mt-48 px-6 text-white box-border">
        {/* Accordion Header */}
        <button className="w-full text-left focus:outline-none bg-black " >
          <div className="flex justify-between items-center bg-gradient-to-r from-purple to-black p-2">
            <p className="text-h5 font-semibold font-poppins mx-auto text-white">
              Season 2
            </p>
          </div>
        </button>

        {/* Accordion Content */}

        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-32 sm:gap-32 gap-6  xl:pb-32  pt-8 sm:pb-32 pb-8">
          {TalkShowSeason2.map((data, index) => (
            <div className="sm:h-96 ">
              <div className="relative overflow-hidden bg-darkgray">
                <iframe
                  className="w-[80%] mx-auto sm:h-[25rem] h-56 md:p-6 py-4 object-cover transition-transform transform hover:scale-105"
                  src={data.videoSrc}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="md:flex flex-wrap items-center justify-between my-3">
                <div className="text-h6">Episode {index + 1}</div>
                <div className="text-h6 font-bold">
                {data.title}
                </div>
                <div className="text-h6">{data.season}</div>
              </div>
            </div>
          ))}
        </div>


        <button className="w-full text-left focus:outline-none bg-black">
          <div className="flex justify-between items-center bg-gradient-to-r from-purple to-black p-2">
            <p className="text-h5 font-semibold font-poppins mx-auto text-white">
              Season 1
            </p>
          </div>
        </button>

        {/* Accordion Content */}

        <div className="grid lg:grid-cols-2 grid-cols-1 xl:gap-32 sm:gap-32 gap-6  xl:pb-32  pt-8 sm:pb-32 pb-8">
          {TalkShowSeason1.map((data, index) => (
            <div className="sm:h-96">
              <div className="relative overflow-hidden bg-darkgray">
                <iframe
                  className="w-[80%] mx-auto sm:h-[25rem] h-56 md:p-6 py-4 object-cover transition-transform transform hover:scale-105"
                  src={data.videoSrc}
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="md:flex flex-wrap items-center justify-between my-3">
                <div className="text-h6">Episode {index + 1}</div>
                <div className="text-h6 font-bold">
                  {data.title}
                </div>
                <div className="text-h6">{data.season}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TalkshowSessions;
