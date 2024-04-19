import React from "react";
import { clients } from "../Constant/JsonData";
import { Link } from "react-router-dom";

const OurBrands = () => {
  return (
    <>
      <section className="logoMarqueeSection">
        <div className="bg-black py-16" id="logoMarqueeSection">
          <div className="default-content-container flex items-center">
            <div className="default-content-container-inner marquee-wrapper relative overflow-hidden inline-block  mt-6">
              <div className="marquee" style={{ animationDuration: "47s" }}>
                {clients.map((client, index) => (
                  <Link
                    key={index}
                    target="_blank"
                    to={client.link}
                    className="relative client-img opacity-100 transition duration-300 ease-in-out"
                  >
                    <img
                      src={client.logo}
                      title="client logo"
                      alt="client"
                      className="marqueelogo object-contain "
                      style={{
                        width: "192px",
                        height: "40px",
                        maxWidth: "none",
                      }}
                    />
                  </Link>
                ))}
              </div>
              <div className="marquee" style={{ animationDuration: "47s" }}>
                {clients.map((client, index) => (
                  <Link
                    key={index}
                    to={client.link}
                    target="_blank"
                    className="relative client-img transition duration-300 ease-in-out"
                  >
                    <img
                      src={client.logo}
                      title="client logo"
                      alt="client"
                      className="marqueelogo object-contain"
                      style={{
                        width: "192px",
                        height: "40px",
                        maxWidth: "none",
                      }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurBrands;
