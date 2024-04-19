import React from "react";

function Space({ custom = 20 }) {
  return <div className={`mt-${custom}`}></div>;
}

export default Space;
