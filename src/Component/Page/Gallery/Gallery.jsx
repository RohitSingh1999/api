import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGallery } from "../../../Redux/actions/action";
import { Link } from "react-router-dom";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";

const Gallery = () => {
  const dispatch = useDispatch();
  const galleryData = useSelector((state) => state.galleryReducer.gallery);

  useEffect(() => {
    dispatch(getGallery());
  }, [dispatch]);

  return (
    <>
      <div className="lg:container mx-auto text-white lg:relative ">
        <div className="grid md:grid-cols-2 overflow-hidden md:h-[80vh] xl:h-screen">
          <div className="xl:h-[70vh]">
            <h1 className="2xl:text-h1 md:text-h2 text-h3 font-bold ml-4 py-6 md:mt-48">
              Gallery
            </h1>
            <p className="leading-[1.5rem] px-4 pb-12 xl:pb-36 text-justify text-pretty">
              Step into a visual feast in our Gallery. See amazing portraits and
              cool shots that tell a story. It's your space to share and
              discover unique styles. Join us, show off your journey, and get
              inspired by others on World Model Hunt! Start sharing your pics
              now!
            </p>
          </div>

          <div className="new overflow-hidden" style={{ position: "relative" }}>
            <div id="image-container">
              {galleryData.map((data, index) => (
                <div className="image">
                  <Link to={`/spotlight/${data.model_id}`} key={index} className="group relative">
                    <img
                      src={data.model_profile}
                      alt="model_image"
                      data-src={data.model_profile}
                      className="picture"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            <div id="image-container">
              {galleryData.map((data, index) => (
                <div className="image">
                  <Link to={`/spotlight/${data.model_id}`} key={index} className="group relative">
                    <img src={data.model_profile} alt="model_img"  data-src={data.model_profile} className="picture" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-96 py-4  block md:hidden">
        <div className="marquees mx-auto">
          <div className="marquee__group flex overflow-hidden">
            {galleryData.map((data, index) => (
              <Link
                to={`/spotlight/${data.model_id}`}
                key={index}
                className="group relative"
              >
                <img
                  src={data.model_profile}
                  className="object-cover w-38  h-[40vh]"
                  alt="magazine"
                />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
              </Link>
            ))}
          </div>

          <div aria-hidden="true" className="marquee__group flex mt-2">
            {galleryData.map((data, index) => (
              <Link
                to={`/spotlight/${data.model_id}`}
                key={index}
                className="group relative"
              >
                <img
                  src={data.model_profile}
                  className="object-cover w-38 h-[40vh]"
                  alt="magazine"
                />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="marquees marquee--reverse mx-auto">
          <div className="marquee__group flex">
            {galleryData.map((data, index) => (
              <Link
                to={`/spotlight/${data.model_id}`}
                key={index}
                className="group relative"
              >
                <img
                  src={data.model_profile}
                  className="object-cover w-38 h-[40vh]"
                  alt="magazine"
                />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
              </Link>
            ))}
          </div>

          <div aria-hidden="true" className="marquee__group flex mt-2">
            {galleryData.map((data, index) => (
              <Link
                to={`/spotlight/${data.model_id}`}
                key={index}
                className="group relative"
              >
                <img
                  src={data.model_profile}
                  className="object-cover w-38 h-[40vh]"
                  alt="magazine"
                />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black bg-opacity-50 p-4">
                        <span className="text-white">{data.model_name}</span>
                      </div>
                    </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <FooterHeader />
    </>
  );
};

export default Gallery;
