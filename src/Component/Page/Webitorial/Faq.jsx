import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getIndividualWwbitorial } from "../../../Redux/actions/action";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import WebitorialSideBar from "./WebitorialSideBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedinIn,
  faPinterest,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  WhatsappShareButton,
} from "react-share";
import WebComments from "./WebComments";
import UserComment from "./userComment";

export default function AccordionBasic() {
  const dispatch = useDispatch();
  const { WebitorialId } = useParams();
  const Webitorial = useSelector(
    (state) => state.webitorialReducer.webitorials
  );

  useEffect(() => {
    dispatch(getIndividualWwbitorial(WebitorialId));
  }, [dispatch, WebitorialId]);

  if (!Webitorial || Webitorial.length === 0) {
    return <div>Loading...</div>;
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <>
      <WebitorialSideBar />
      <section className="xl:h-screen lg:h-[80vh] md:h-[60vh] h-[50vh]  flex justify-center items-center">
        <div className="w-full h-full">
          <img
            alt="mainimage"
            src={Webitorial.webitorial_image}
            className="h-full w-full object-cover"
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </section>

      <section className="w-full max-w-screen-md divide-y divide-slate-200 container mx-auto my-8 text-pretty ">
        <h1 className="lg:text-h3 text-h4 font-semibold text-center text-black">
          {Webitorial.webitorial_title}
        </h1>
        <div
          className="bg-white max-w-screen-md p-4 my-8 tracking-wide mx-auto text-justify"
          dangerouslySetInnerHTML={{ __html: Webitorial.webitorial_content }}
        ></div>

        <div className="flex items-center sm:justify-between justify-center flex-wrap">
        <div className="p-4 rounded-lg flex flex-wrap gap-4">
  {Webitorial ? (
    typeof Webitorial.webitorial_tag === 'string' ? (
      Webitorial.webitorial_tag.split(', ').map((tag, index) => (
        <Link to={`/webitorials/search?discover=${tag}`} onClick={scrollToTop}>
        <div key={index} className="border p-2 border-black border-opacity-35 hover:text-purple cursor-pointer hover:border-purple transition-all duration-300">
          {tag}
        </div>
        </Link>
      ))
    ) : (
      <p className="border p-2 border-black border-opacity-35">Invalid format for blog_tag</p>
    )
  ) : (
    <p className="border p-2 border-black border-opacity-35">No tags available</p>
  )}
</div>

          
          <div className="flex gap-2 justify-end ml-auto mr-8 mb-4">
            <p className="sm:ml-6 md:ml-0 mt-2 text-p font-bold">Share on</p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <FacebookShareButton
                url={window.location.href}
                title={Webitorial.webitorial_title}
              >
                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
              </FacebookShareButton>
            </p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <LinkedinShareButton
                url={window.location.href}
                title={Webitorial.webitorial_title}
              >
                <FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon>
              </LinkedinShareButton>
            </p>
            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <PinterestShareButton
                url={window.location.href}
                title={Webitorial.webitorial_title}
              >
                <FontAwesomeIcon icon={faPinterest}></FontAwesomeIcon>
              </PinterestShareButton>
            </p>

            <p className="lg:ml-4 ml-2 md:ml-0 flex h-10 w-10 items-center justify-center hover:border-purple rounded-full border border-black text-black hover:text-purple transition duration-300 ease-in-out">
              <WhatsappShareButton
                url={window.location.href}
                title={Webitorial.webitorial_title}
              >
                <FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon>
              </WhatsappShareButton>
            </p>
          </div>
        </div>
        {/* <hr className="my-4 opacity-20" /> */}

        <div className="flex justify-center items-center">
          <div className="bg-white w-full max-w-screen-xl mx-auto rounded-lg  flex md:flex-row flex-col">
            <div className="md:w-1/4 p-4">
              <img
                src={Webitorial ? Webitorial.image : ""}
                alt="Person"
                className="rounded-full h-32 w-32 mx-auto my-auto"
              />
            </div>
            <div className="md:w-3/4 p-4">
              <h1 className="text-2xl font-bold mb-2">
                {Webitorial ? Webitorial.name : ""}
              </h1>
              <p className="mb-4">
                We care about more than fashion. We care about empowerment &
                expression through art.
              </p>
              <p className="font-bold">Author posts</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-screen-lg mx-auto py-8 px-4 sm:px-8">
          <div className=" w-full bg-white">
          <p className="text-h6 mb-4 font-bold">Add Comments</p>
            <UserComment /> 
            <WebComments />
          </div>
        </div>
      </section>
      <FooterHeader />
    </>
  );
}
