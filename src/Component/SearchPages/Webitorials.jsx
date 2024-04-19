import React, { useEffect } from "react";
import { useLocation, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWebitorial } from "../../Redux/actions/action";
import Heading from "../Common/Heading";
import slugify from 'slugify';
import WebitorialSideBar from "../Page/Webitorial/WebitorialSideBar";


const Webitorials = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const searchQuery = new URLSearchParams(location.search).get('discover');
  const web = useSelector((state)=> state.webitorialReducer.webitorial);
  const regex = new RegExp(searchQuery, 'i');
  const filteredWeb = web.filter((webitorial) => regex.test(webitorial.webitorial_title) || regex.test(webitorial.webitorial_content) || regex.test(webitorial.webitorial_tag));

  useEffect(() => {

    if (web.length === 0) {
      dispatch(fetchWebitorial());
    }
  }, [dispatch, web]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div>
       <WebitorialSideBar />
      <div className="container my-12 mx-auto px-4 md:px-12 mt-48">
      <div className="mb-12">
        <div className="text-h3 font-bold font-poppins">
          <Heading HeadingText="Webitorials" />
        </div>
      </div>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
          {filteredWeb.length > 0 ? (
            filteredWeb.map((data, index) => {
              const slug = slugify(data.webitorial_title, { lower: true });
              return (
                <div key={index} className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                  <Link to={`/webinterviews/${data.webitorial_id}/${slug}`} onClick={scrollToTop}>
                    <article className="overflow-hidden shadow-lg">
                      <img
                        alt="Placeholder"
                        className="block h-80 w-full"
                        src={data.webitorial_image}
                      />
                      <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                        <h1 className="text-lg">
                          <a className="no-underline hover:text-purple transition-all duration-300 text-black text-h5 font-bold">
                            {data.webitorial_title}
                          </a>
                        </h1>
                      </header>
                      <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline text-black">
                          <img
                            alt="Placeholder"
                            className="block rounded-full h-10"
                            src='https://s3.amazonaws.com/wmh.all.posts/static_images/common/Favicon.png'
                          />
                          <p className="ml-2 text-sm">World Model Hunt</p>
                        </a>
                        <a className="no-underline text-grey-darker hover:text-red-dark">
                          <p className="text-grey-darker text-sm">{data.date}</p>
                        </a>
                      </footer>
                    </article>
                  </Link>
                </div>
              );
            })
          ) : (
            <p>This Data does not exist!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Webitorials;
