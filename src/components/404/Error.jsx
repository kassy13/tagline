import React from "react";
import error from "../../assets/404.svg";

const Error = () => {
  return (
    <div className="w-full flex items-center justify-center h-screen">
      <img src={error} alt="" className="w-full h-full" />
    </div>
  );
};

export default Error;
