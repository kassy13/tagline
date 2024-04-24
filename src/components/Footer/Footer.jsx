import React from "react";
import { Link } from "react-router-dom";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";

const Footer = () => {
  return (
    <section className="footer bg-black text-green-200 ">
      <div className="container flex p-8   gap-6 flex-col md:flex-row">
        <div className="left flex align-middle justify-between flex-col md:w-1/2">
          <h3 className="text-1xl font-semibold ">ABC Company</h3>
          <p className="flex text-balance md:w-2/3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat
            eveniet, commodi perspiciatis quasi nam voluptas unde odit obcaecati
            eius ab.
          </p>
          <div className="flex gap-2 pt-4">
            <Link to="#" className="hover:text-red-500">
              {" "}
              {/* Apply hover effect for Instagram */}
              <RiInstagramFill />
            </Link>
            <a href="#" className="hover:text-blue-900">
              {" "}
              {/* Apply hover effect for Facebook */}
              <RiFacebookFill />
            </a>
            <a href="#" className="hover:text-blue-500">
              {" "}
              {/* Apply hover effect for LinkedIn */}
              <RiLinkedinBoxFill />
            </a>
          </div>
        </div>
        <div className="right flex gap-2 flex-col md:flex-row md:justify-between md:w-1/2">
          <div className="flex flex-col">
            <h3 className="font-semibold pb-2  text-nowrap">Website Links</h3>
            <Link to="/" className="hover:text-green-400 transform:scale=1.05">
              Home
            </Link>{" "}
            {/* Apply hover effect for Home */}
            <Link to="/about" className="hover:text-green-400">
              About
            </Link>{" "}
            {/* Apply hover effect for About */}
            <Link to="/contact" className="hover:text-green-400">
              Contact us
            </Link>{" "}
            {/* Apply hover effect for Contact us */}
            <Link to="/faqs" className="hover:text-green-400">
              FAQs
            </Link>{" "}
            {/* Apply hover effect for FAQs */}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold pb-2  text-nowrap">Services</h3>
            <Link
              to="/website-designing"
              className="hover:text-green-400 text-nowrap"
            >
              Website designing
            </Link>{" "}
            {/* Apply hover effect for Website designing */}
            <Link
              to="/website-development"
              className="hover:text-green-400 text-nowrap"
            >
              Website development
            </Link>{" "}
            {/* Apply hover effect for Website development */}
            <Link to="/seo-services" className="hover:text-green-400">
              Seo services
            </Link>{" "}
            {/* Apply hover effect for Seo services */}
          </div>
          <div className="flex flex-col">
            <h3 className="font-semibold pb-2  text-nowrap">Languages</h3>
            <Link to="/english" className="hover:text-green-400">
              English
            </Link>{" "}
            {/* Apply hover effect for English */}
            <Link to="/igbo" className="hover:text-green-400">
              Igbo
            </Link>{" "}
            {/* Apply hover effect for Igbo */}
            <Link to="/react" className="hover:text-green-400">
              React
            </Link>{" "}
            {/* Apply hover effect for React */}
            <Link to="/node-js" className="hover:text-green-400">
              Node js
            </Link>{" "}
            {/* Apply hover effect for Node js */}
          </div>
        </div>
      </div>
      <hr />
      <p className="small text-center p-4">
        <small>Copyright 2023 Designed by sommy</small>
      </p>
    </section>
  );
};

export default Footer;
