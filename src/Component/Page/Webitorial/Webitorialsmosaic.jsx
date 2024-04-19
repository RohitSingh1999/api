import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWebitorial } from "../../../Redux/actions/action";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import slugify from "slugify";

const Webitorialsmosaic = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const { webId } = useParams();
  const webitorial =
    useSelector(
      (state) => state.webitorialReducer.webitorial.webitorialsData
    ) || [];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await dispatch(getWebitorial(webId));
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, webId]);

  const calculateColumnCount = () => {
    const imageCount = webitorial.length;
    if (imageCount === 1) {
      return 'grid-cols-1'; 
    } else if (imageCount === 2) {
      return 'md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2'; 
    } else if (imageCount === 3) {
      return 'md:grid-cols-3 sm:grid-cols-3 lg:grid-cols-3'; 
    } else {
      return 'md:grid-cols-4 sm:grid-cols-4 lg:grid-cols-4'; 
    }
  };

  const columnCount = calculateColumnCount();

  

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {loading ? (
        <p className="flex justify-center"><img src="https://s3.amazonaws.com/wmh.all.posts/static_images/loader.svg" alt="loader" className="w-56 h-56"/></p>
      ) : (
        <>
    <div className={`pt-div mt-24 grid ${columnCount} relative gap-0`}>      
            {webitorial.length > 0 ? (
              webitorial.map((member, index) => {
                const slug = slugify(member.webitorial_title, { lower: true });

                return (
                  <div
                    key={member.webitorial_id}
                    className={`relative col-span-1`}
                    style={{
                      gridRow: `span ${Math.floor(Math.random() * 3) + 28}`,
                      height: "auto",
                      marginBottom: "0",
                    }}
                  >
                    <div className="image-container relative overflow-hidden aspect-w-16 aspect-h-9">
                      <Link
                        to={`/webinterviews/${member.webitorial_id}/${slug}`}
                       
                      >
                        <img
                          src={member.webitorial_image}
                          alt={member.webitorial_title}
                          onClick={scrollToTop}
                          className="w-full object-cover img-filter"
                          style={{
                            objectPosition: "center center",
                            margin: "0",
                            padding: "0",
                          }}
                        />
                      </Link>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No webitorial data available.</p>
            )}
          </div>
          <FooterHeader />
        </>
      )}
    </>
  );
};

export default Webitorialsmosaic;
