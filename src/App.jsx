import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./Component/Page/Home/Home";
import Space from "./Component/Common/Space";
import Blog from "./Component/Page/Blog/Blog";
import Navbar from "./Component/Common/Navbar";
import Terms from "./Component/Page/Policy/Terms";
import Faq from "./Component/Page/Webitorial/Faq";
import Privacy from "./Component/Page/Policy/Privacy";
import Gallery from "./Component/Page/Gallery/Gallery";
import Talkshow from "./Component/Page/Talkshow/Talkshow";
import Calender from "./Component/Page/Calender/Calender";
import Magazine from "./Component/Page/Magazine/Magazine";
import MapSVGComponent from "./Component/Page/Webitorial/Map";
import GalleryPage from "./Component/Page/Gallery/GalleryPage";
import BlogIndividual from "./Component/Page/Blog/BlogIndividual";
import ContactPage from "./Component/Page/ContactPage/ContactPage";
import Calendersingle from "./Component/Page/Calender/Calendersingle";
import Webitorialsmosaic from "./Component/Page/Webitorial/Webitorialsmosaic";
import MagazineIndividual from "./Component/Page/Magazine/MagazineIndividual";
import Submission from "./Component/Common/Submission";
import About from "./Component/Page/About/About";
import ReggieProfile from "./Component/Page/About/RaggieProfile";
import SitanshuProfile from "./Component/Page/About/SitanshuProfile";
import MagazineSingleSection from "./Component/Page/Magazine/MagazineSingleSection";
import Blogs from "./Component/SearchPages/Blogs";
import Webitorials from "./Component/SearchPages/Webitorials";
import DefaultPage from "./Component/Common/DefaultPage";
import CookiesBanner from "./CookiesBanner";
import { useState } from "react";
import Webstories from "./Component/Page/Calender/Webstories";


function App() {
  const [isCookieBarOpen, setIsCookieBarOpen] = useState(true);

  const closeCookieBar = () => {
    setIsCookieBarOpen(false);
  };

  return (
    <>
  

      <Router>
        <Navbar />
        <Space />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/webinterviews/:WebitorialId/:slug" element={<Faq />} />
          <Route path="/style-stories" element={<Blog />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/spotlight" element={<Gallery />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/monthly-gazette" element={<Magazine />} />
          <Route path="/talkshow" element={<Talkshow />} />
          <Route path="/calendars" element={<Webstories />} />
          <Route path="/get-in-touch" element={<ContactPage />} />
          <Route path="/webinterviews" element={<MapSVGComponent />} />
          <Route path="/spotlight/:modelId" element={<GalleryPage />} />
          <Route path="/webinterviews/:webId" element={<Webitorialsmosaic />} />
          <Route
            path="style-stories/:BlogId/:slug"
            element={<BlogIndividual />}
          />
          <Route path="calendars/:id" element={<Calendersingle />} />
          <Route path="/monthly-gazette/:id" element={<MagazineIndividual />} />
          <Route
            path="/latest-monthly-gazette/:id"
            element={<MagazineSingleSection />}
          />
          <Route path="/submission" element={<Submission />} />
          <Route path="founders" element={<About />} />
          <Route path="/webitorials/search" element={<Webitorials />} />
          <Route path="/blog/search" element={<Blogs />} />
          <Route path="/founders/reggie-gardner" element={<ReggieProfile />} />
          <Route
            path="/founders/sitanshu-srivastava"
            element={<SitanshuProfile />}
          />
          {/* New route for magazine search redirection */}
          <Route
            path="/magazine"
            element={<Navigate to="/monthly-gazette" />}
          />
          <Route path="/blog" element={<Navigate to="/style-stories" />} />
          <Route path="/gallery" element={<Navigate to="/spotlight" />} />
          <Route
            path="/webitorial"
            element={<Navigate to="/webinterviews" />}
          />
          <Route path="/contact" element={<Navigate to="/get-in-touch" />} />

          <Route path="/*" element={<DefaultPage />} />
        </Routes>
      </Router>

      {isCookieBarOpen && <CookiesBanner closeCookieBar={closeCookieBar} />}
    </>
  );
}

export default App;
