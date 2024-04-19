import React from "react";
import { Link, useParams } from "react-router-dom";
import Btn from "../../Common/Btn";
import Heading from "../../Common/Heading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { AllMagazineData } from "../../Constant/Magazine";
import WebitorialSidebar from "../Webitorial/WebitorialSideBar";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";

const MagazineIndividual = () => {
  const { id } = useParams();
  const magazine = AllMagazineData.find((year) =>
    year.months.some((month) => month.slug === id)
  );

  if (!magazine) {
    return <div>Magazine not found</div>;
  }
  const month = magazine.months.find((m) => m.slug === id);

  if (!month) {
    return <div>Month not found</div>;
  }

  const { imagelinks, description, maglink, allcardits } = month;

  return (
    <>
      <WebitorialSidebar />
      <div className="py-12 lg:container mx-auto px-6">
        <div className="flex items-center gap-8">
          <p className="md:text-h3 text-h4 font-bold">
            <Heading HeadingText={month.slug} />
          </p>
        </div>
        <p className="text-p mb-8 mt-2">
          <b>Published By: </b>
          <Link
            to="/user"
            className="hover:text-red hover:cursor-pointer transition duration-300 ease-in-out"
          >
            WORLD MODEL HUNT
          </Link>{" "}
          
        </p>

        <div className="grid md:grid-cols-12 md:gap-4 md:mt-16">
          <div className="col-span-12 lg:col-span-5 mb-6 md:mb-0">
            <img
              src={imagelinks}
              className="img-fluid sm:h-[500px] " 
              alt="groups"
            />
          </div>
          <div className="col-span-12 lg:col-span-7">
            <p className="text-justify text-p font-poppins">{description}</p>
            {maglink && (
              <>
    <div className="flex flex-wrap  mt-10 gap-4">
      <Link to={maglink} target="_blank">
        <Btn btname={"Buy Digital"} />
      </Link>
      <Link to={maglink} target="_blank">
        <Btn btname={"Buy Print"} />
      </Link>
    </div>
 
            <div className="my-3">
              <FontAwesomeIcon icon={faInfoCircle} className="text-black" />{" "}
              <span>Buy via Magcloud</span>
            </div>
            </>
             )}
          </div>
        </div>


        <div className="flex items-center mt-10 gap-8">
          <p className="md:text-h3 text-h4 font-bold">
            <Heading HeadingText="Credits" />
          </p>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 mt-14">
  {allcardits ? (
    allcardits.map((cardit) => (
      <div key={cardit.id} className="relative card py-5">
        <Link to={`https://${cardit.instalink}`} target="__blank">
          <div className="absolute h-full w-full ">
            <img
              src={cardit.image}
              alt="Image Description"
              className="h-full w-full object-cover"
            />
            <div className="dark-overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-60"></div>
          </div>
          <div className="relative top-0 bottom-0 left-5 text-white">
            <div className="index font-bold text-h3">{cardit.Sno}</div>
            <hr className="border-t border-white my-5" />
            {cardit.credits.map((credit, index) => (
              <div key={index} className="text text-p">
                <strong className="">{credit.split(": ")[0]}:</strong>{" "}
                {credit.split(": ")[1]}
              </div>
            ))}
          </div>
        </Link>
      </div>
    ))
  ) : (
    <div>No data available</div>
  )}
</div>
      </div>
      <FooterHeader />
    </>
  );
};

export default MagazineIndividual;
