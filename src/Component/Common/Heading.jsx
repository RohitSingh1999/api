import React from "react";

function Heading({ HeadingText = "Your Heading" }) {
  return (
    <>
      <section>
        <div className="mb-2  md:px-0 text-white">
          <div className="flex  mb-2 pt-7">
            <img src="https://s3.amazonaws.com/wmh.all.posts/static_images/Lines.png" alt="new upadtes" className="lg:h-12 lg:w-10 md:h-10 md:w-8 w-6 h-8" />
            <div className="uppercase sm:text-h4 lg:text-h3 text-h5 font-bold">{HeadingText}</div>
          </div>
          <div className="border-b-2 border-white w-32 "></div>
        </div>
      </section>
    </>
  );
}

export default Heading;
