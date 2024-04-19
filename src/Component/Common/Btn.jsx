import React from "react";

function Btn({ btname = "button" }) {
  return (
    <>
      <button className="relative flex h-[50px] w-40 items-center font-bold justify-center overflow-hidden bg-purple  text-white shadow-2xl transition-all duration-300 before:absolute before:inset-0 before:border-0 before:border-white before:duration-100 before:ease-linear hover:bg-white hover:text-purple hover:shadow-purple hover:before:border-[25px]">
        <span className="relative z-10 text-h6 ">{btname}</span>
      </button>
    </>
  );
}

export default Btn;
