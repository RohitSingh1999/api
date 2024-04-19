import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getIndividualGallery } from "../../../Redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";

const GalleryPage = () => {
  const { modelId } = useParams();
  const [selectedImage, setSelectedImage] = useState([]);
  const [selectedMagazine, setSelectedMagazine] = useState([]);
  const singleGallery = useSelector(
    (state) => state.galleryReducer.singleGallery
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (modelId !== undefined) {
        await dispatch(getIndividualGallery(modelId));
      }
    };

    fetchData();
  }, [dispatch, modelId]);

  useEffect(() => {
    if (singleGallery && singleGallery.model_photo_gallery) {
      const galleryArray = singleGallery.model_photo_gallery
        .split(",")
        .map((url) => url.trim());
      setSelectedImage(galleryArray);
    }
    if (singleGallery && singleGallery.model_magazines) {
      const magazineArray = singleGallery.model_magazines
        .split(",")
        .map((url) => url.trim());
      setSelectedMagazine(magazineArray);
    }
  }, [singleGallery]);

  if (!singleGallery) {
    return <div>Loading.............</div>;
  }

  return (
    <>
      <section>
        <div className="container-fluid ">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-4 ">
              <img
                src={singleGallery ? singleGallery.model_profile : ""}
                alt="Random"
                className="w-full h-full object-cover aspect-[4/6] -z-[1000]"
              />
            </div>
            <div className="md:col-span-8 col-span-12 ">
              <h1 className="xl:text-h1 lg:text-h2 md:text-h3 text-h4 leading-tight md:my-24 font-bold text-responsive px-4 border-box">
                {singleGallery ? singleGallery.model_name : ""}
              </h1>
              <h4 className="text-h5 font-bold px-4">CREDITS</h4>
              <div
                className="md:w-96 p-4"
                dangerouslySetInnerHTML={{
                  __html: singleGallery ? singleGallery.model_bio : "",
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="flex justify-center md:pt-48">
            <div className="pair-image">
              <img
                src={selectedMagazine[0]}
                alt="img"
                className="object-contain"
              />
            </div>
            <div className="pair-image">
              <img
                src={selectedMagazine[1]}
                alt="img"
                className=" object-contain"
              />
            </div>
          </div>

          <div className="single-image my-12 md:pt-4">
            <img
              src={selectedImage[0]}
              alt="img"
              className="mx-auto mt-32 px-3"
              style={{ maxHeight: "80vh", width: "auto" }}
            />
          </div>

          <div className="grid grid-cols-2 md:py-20">
            {selectedImage &&
              selectedImage.slice(1, 5).map((image, index) => (
                <div className="pair-image" key={index}>
                  <img
                    src={image}
                    alt={`img${index}`}
                    className="md:p-20 p-4"
                  />
                </div>
              ))}
          </div>

          {selectedImage &&
            selectedImage.slice(5).map((image, index) => (
              <div className="image-center grid grid-cols-1" key={index}>
                <img
                  src={image}
                  alt={`img${index}`}
                  className="mx-auto object-cover w-[40%] p-4"
                />
              </div>
            ))}
        </div>

        <FooterHeader />
      </section>
    </>
  );
};

export default GalleryPage;
