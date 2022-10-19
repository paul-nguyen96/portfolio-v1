import React from "react";
import { FaHome } from "react-icons/fa";

function Navbar(){



  return (
    <div className="navbar bg-base-100 sticky top-0 z-50 backdrop-filter backdrop-blur-lg bg-opacity-30">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-bold"
          >
            <li>
              <a href="#AboutMe">About Me</a>
            </li>
            <li>
              <a href="#Projects">Projects</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case text-3xl">
          <FaHome />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 font-bold">
          <li>
            <a href="/AboutMe">About Me</a>
          </li>
          <li>
            <a href="/Projects">Projects</a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a href="https://docs.google.com/document/d/1GWFFO71J9pzJpT4z8BiqwRqrRfwThPovtUMfAoZNufM/" className="btn">Resume</a>
      </div>
    </div>
  );
}

export default Navbar;
