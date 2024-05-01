// import React from "react";
import Logout from "../Logout/Logout";
import { Link } from "react-router-dom";

const DashSideBar = () => {
  return (
    <section className="bg-green-300 min-h-screen w-48 py-12 pb-30 px-3 flex flex-col justify-between z-10">
      <ul>
        <Link to={"/"}>Home</Link>
      </ul>
      <Logout />
    </section>
  );
};

export default DashSideBar;
