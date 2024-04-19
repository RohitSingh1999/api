import React from 'react'
import Heading from "../../Common/Heading";
import LatestMagazine from '../Magazine/LatestMagazine';

const MagazineSection = () => {
    return (
        <div className="xl:mt-28 md:mt-16 mt-8 ">
          <div className="flex items-center gap-8  lg:container mx-auto box-border px-6">
            <div className="md:text-h3 text-h4 font-bold md:mb-20 mb-8">
              <Heading HeadingText="Latest Magazine" />
            </div>
          </div>
          <LatestMagazine />
        </div>
      );
    };

export default MagazineSection