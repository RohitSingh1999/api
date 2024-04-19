import React, { useEffect, useRef, useState } from "react";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import Heading from "../../Common/Heading";

import TalkshowSessions from "./TalkshowSeasons";


const Gallery = () => {


  return (
    <>
    <div className='mt-16' >
    <div className="container mx-auto">
          <div className="text-h3 font-bold font-poppins mt-32 -mb-32 px-6 box-border">
            <Heading HeadingText="TAlkshow" />
          </div>
        </div>
<div>
<TalkshowSessions />
</div>

<FooterHeader />
    </div>
  </>
  );
};

export default Gallery;
