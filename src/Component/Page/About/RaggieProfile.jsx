import React from "react";
import Heading from "../../Common/Heading";
import FooterHeader from "../../Common/FooterCommon/FooterHeader";
import { Link } from "react-scroll";

const ReggieProfile = () => {
  return (
    <>
    <div className="mt-16 font-poppins container mx-auto max-w-screen-lg px-6 border-box">
      <div className="bg-black py-20 md:px-0">
      <Heading HeadingText = "Reggie Gardner"/>
        <p className="text-white font-bold text-h4 mt-14">Meet Reggie Gardner</p>
        <p className="w-[10%] mt-5 bg-purple" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16 text-pretty text-justify">
          <div>
            <p className="font-poppins text-h5 font-semibold my-6 text-white ">
              Mr. Reginald Gardner worked at NASA as a communication specialist.
              For the past 12 years, he learned and was trained in excellence
              when performing mission-critical jobs in the space program.
            </p>
            <p className="lg:my-2  md:my-1 2xl:my-10 text-p leading-[1.5rem] font-poppins text-white">
              While at NASA, Mr. Reggie Gardner assisted Engineers in building
              software programs to support training, configured equipment and
              hardware in the SVMF Facility for Astronaut training, and
              troubleshoot and repair electronics, mechanical components, and
              hardware for the Space Shuttle and Space Station Mockups. Mr.
              Reginald Gardner's knowledge and experience at NASA pursuing
              excellence gave Reggie the entrepreneurial spirit, ethics, and
              drive for this venture to succeed.
            </p>
          </div>
          <div className="justify-end lg:items-center md:items-start tb:hidden">
            <img className=" w-96 mx-auto mb-6" src="https://s3.amazonaws.com/wmh.all.posts/static_images/common/reggie.132e88fd12c599abd123.jpg" alt="Reggie Gardner" />
          </div>
        </div>
        <p className="w-full text-p leading-[1.5rem] font-poppins text-pretty text-justify text-white">
          His continual pursuit of excellence gave Reggie Gardner the management
          skills needed as well as insight into hiring people with the same
          mindset of excellence and the pursuit of perfection as found in NASA.
          This mindset will give WORLD MODEL HUNT the cutting edge and the
          competitive advantage to thrive. This spirit of pursuing excellence
          and perfection that was built into Reggie drove him to ultimately
          create WORLD MODEL HUNT.
        </p>
        <div>
          <p className=" md:text-h4 text-h5 font-bold text-white  md:mt-20 mt-8">
            Achievements and Accomplishments
          </p>
          <p className="w-[10%] mt-5 bg-red h-1" />
          <div className="flex flex-col mt-10 justify-center gap-3 tb:mt-4 ">
            <span
              className="bg-[#ED2228] absolute sm:ml-[6%] my-[50%] w-[80px] h-[80px] flex text-white font-semibold justify-center items-center tb:ml-[2%]"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              2009
            </span>
            <div className=" shadow-md p-5 w-[85%] text-white ml-auto p-[30PX]">
              <p className="w-full ml-[1.8rem] text-p leading-[1.5rem] text-pretty text-justify">
                Certificate of Appreciation for The Transformation of The
                International Space Station (ISS) to Six-Person Crew
                Capabilities
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-center gap-3 ">
            <span
              className="bg-purple absolute sm:ml-[6%] my-[50%] w-[80px] h-[80px] flex text-white font-semibold justify-center items-center tb:ml-[2%]"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              2007,<br/>2009
            </span>

            <div className=" w-[85%] ml-auto text-white p-5 shadow-md">
              <p className="w-full ml-[1.8rem] text-p leading-[1.5rem]">
                Awarded for Outstanding Professionalism Performance and Teamwork
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-center gap-3 ">
            <span
              className="bg-[#ED2228] absolute sm:ml-[6%] my-[50%] w-[80px] h-[80px] flex text-white font-semibold justify-center items-center tb:ml-[2%]"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              2005
            </span>
            <div className=" w-[85%] ml-auto p-[30PX] shadow-md">
              <p className="w-full text-white ml-[1.8rem] text-p leading-[1.5rem]">
                Public Service Group Achievement Award -2006 Raytheon Six Sigma
                Specialist Qualification
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-center gap-3 ">
            <span
              className="bg-[#ED2228] absolute md:ml-[6%] my-[50%] w-[80px] h-[80px] flex text-white font-semibold justify-center items-center tb:ml-[2%]"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              2004
            </span>
            <div className=" w-[85%] ml-auto p-[30PX] shadow-md">
              <p className="w-full text-white ml-[1.8rem] text-p leading-[1.5rem]">
                Employee of The Month: For Outstanding Professionalism
                Performance and Teamwork
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 justify-center gap-3 ">
            <span
              className="bg-[#ED2228] absolute md:ml-[6%] my-[50%] w-[80px] h-[80px] flex text-white font-semibold justify-center items-center tb:ml-[2%]"
              style={{
                clipPath:
                  "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
              }}
            >
              2003
            </span>
            <div className=" w-[85%] ml-auto p-[30PX] shadow-md">
              <p className="w-full text-white ml-[1.8rem] text-p leading-[1.5rem]">
                Employee of The Month: For Excellence in Performance Teamwork
                and Safety
              </p>
            </div>
          </div>
        </div>

        <p className="text-h4 text-white font-bold mt-24">Education</p>
        <p className="text-p text-white leading-[1.5rem] mt-5 ">
          Texas Southern University. Majored in Telecommunications; Minored in
          Electronics
        </p>
        <div className="flex flex-col md:flex-row gap-8 text-white mt-24 text-pretty text-justify">
          <div className="md:w-[50%] w-full">
            <p className="text-h4 font-bold leading-[2.2rem]  md:w-[40%] "> Previous Career</p>
            <p className="w-[90%] mt-4 text-p leading-[1.5rem]">Manager/Lead Field Installation Technician: Karl Storz Endoscope: project at Walter Reed National Military Medical Center in Bethesda, MD; 5-million-dollar project. MD Anderson Cancer Center – Media Service Department</p>
          </div>
          <div className="md:w-[50%] text-white w-full">
            <p className="text-h4 font-bold leading-[2.2rem]">Worked with various Hip-Hop/R&B artists/producers:</p>
            <p className="w-[90%] mt-4 text-p leading-[1.5rem]">RBX (DeathRow Records), CandyMan, Kiotti, Billy Cook, DaGoldenChild, Marq-La, BigBoo, Psyco Sid, Hardattak, Dedd Tho, Texas Most Wanted, Pain Killa, Cle'che, Marlin Demby, Gene Bogany, Rakesh, TLee.</p>
          </div>
        </div>

        
        <p className=" text-[2rem] font-bold text-white mt-24 tb:text-[1.3rem]"> Produced and Directed Projects:</p>
        <p className=" text-p text-white leading-[1.5rem] mt-4 ">
        Produced and Co-directed projects with Mr. BoomTown (Director/Producer)
        </p>

        <div className="flex md:flex-row text-white flex-col mt-24">
          <div className="md:w-[50%] w-full">
            <p className=" text-h4 font-bold leading-[2.2rem]  md:w-[40%] tb:w-full ">Executive Producer</p>
            <p className="w-[90%] mt-4  text-p leading-[1.5rem]">for the movie "Hyphen"</p>
            <p className="w-[90%] mt-4">
            <iframe
                  className="mx-auto sm:h-[28rem] md:h-[20rem] w-[100%] md:-ml-6 md:p-6 py-4 object-cover transition-transform transform hover:scale-105"
                  src="https://www.youtube.com/embed/B-mSRliAzaE?si=6qQus2vIkntrsp7r"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
                </p>
          </div>
          <div className="md:w-[50%] text-white tb:w-full">
            <p className="text-h4 font-bold leading-[2.2rem] ">Executive Producer/ Co-Director - Music Video</p>
            <p className="w-[90%] mt-4  text-p leading-[1.5rem]">DaGoldenChild - "Gametime"</p>
            <p className="w-[90%] mt-4">
            <iframe
                  className=" mx-auto sm:h-[28rem] md:h-[20rem] w-[100%] md:-ml-6  md:p-6 py-4 object-cover transition-transform transform hover:scale-105"
                  src="https://www.youtube.com/embed/2NtCPW6-mf4?si=6zCZ5Gk6RNO5Z_wt"
                  title="YouTube video"
                  allowFullScreen
                ></iframe>
                </p>
          </div>
        </div>
      </div>
    </div>
    <FooterHeader />
    </>
  );
};

export default ReggieProfile;