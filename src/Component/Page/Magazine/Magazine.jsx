import React from "react";
import Heading from "../../Common/Heading";
import MagazinePage from "./MagazinePage";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import WebitorialSidebar from "../Webitorial/WebitorialSideBar";

const webitorial = [
  { country_name: "USA" },
  { country_name: "Canada" },
  { country_name: "UK" },
  { country_name: "Australia" },
  { country_name: "Germany" },
  { country_name: "USA" },
  { country_name: "Canada" },
];

const Magazine = () => {
  return (
    <>
      <WebitorialSidebar />
      {/* magazine page */}
        <MagazinePage />
      <FooterHeader />
    </>
  );
};

export default Magazine;
