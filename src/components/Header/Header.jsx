import React, { useState } from "react";
import logo from "../../assets/logo2.png";
import { Link, NavLink } from "react-router-dom";
import {
  FaFacebook,
  FaHamburger,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky shadow z-50 top-0">
      <nav className=" hidden  justify-between items-center w-full h-16 bg-black text-white relative p-2 mr-auto md:flex  ">
        <div className="img w-12 h-8 flex items-center justify-center">
          <Link to="/" className="absolute">
            <img src={logo} alt="" className="ml-8" />
          </Link>
        </div>
        <ul
          className="links flex justify-between gap-4 mr-8  "
          data-aos="fade-up"
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact-us"
              className={({ isActive }) =>
                isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
              }
            >
              Signup
            </NavLink>
          </li>
          <li className="flex ">
            <NavLink
              to="/Login"
              className={({ isActive }) =>
                isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile nav */}
      <nav
        className={
          "flex justify-between items-center w-full h-16 bg-black text-white relative p-2 mr-auto  md:hidden "
        }
        onClick={() => setOpen(!open)}
      >
        <div className={"img w-14 h-10 flex items-center justify-center"}>
          <Link to="/" className="absolute">
            <img src={logo} alt="" className="ml-8" />
          </Link>
        </div>
        <ul
          className={`links bg-green-300 h-screen fixed top-0 mt-16 w-screen pt-16 pl-6 left-full transition-all 5s
           ${open ? "open" : ""} `}
          data-aos="fade-up"
        >
          <div className="">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact-us"
                className={({ isActive }) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Contact Us
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Signup
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Login"
                className={({ isActive }) =>
                  isActive ? "bg-green-400 p-1 rounded" : "text-gray-500 "
                }
              >
                Login
              </NavLink>
            </li>
          </div>
          <div className="text-black text-2xl flex gap-4">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </ul>
        <RiMenu3Line className="text-white text-2xl mr-4" />
      </nav>
    </header>
  );
};

export default Header;
