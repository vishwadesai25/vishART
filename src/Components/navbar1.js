import React from "react";
import { FaHome } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { LuRectangleHorizontal } from "react-icons/lu";
import { AiOutlineContacts } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";
import {GrBlockQuote} from "react-icons/gr"
// import {  useLocation } from "react-router-dom";
import { BsCalendar3 } from "react-icons/bs";
import "./navbar.css";

function Navbar1() {
  // const location = useLocation();
  // const isLinkActive = (link) => {
  //   return link === location.pathname;
  // };

  return (
    // <h2>Navbar</h2>
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            vishART
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className={`nav-item `}>
          {/* ${isLinkActive("/Home") ? "active" : ""} */}
              <div className="icon25"><FaHome/></div>
              <a className="nav-link navbar25 " aria-current="page" href="/Home">
                Home
              </a>
            </li>
            <li>
            <div className="icon25"><BsStars/></div>
              <a className="nav-link navbar25" aria-current="page" href="/Famous">
              Famous
              </a>
            </li>
            <li>
            <div className="icon25"><LuRectangleHorizontal/> </div>
              <a className="nav-link navbar25" aria-current="page" href="/Canvas">
              Canvas
              </a>
            </li>
            <li >
            <div className="icon25"><AiOutlineContacts/></div>
              <a className="nav-link navbar25" href="/Contact">
              Contact
              </a>
            </li>
            <li>
                <div className="icon25">
                  <BsCalendar3 />
                </div>
                <a className="nav-link navbar25" href="/Art">
                  dailyArt
                </a>
              </li>
              <li>
                <div className="icon25">
                  <GrBlockQuote />
                </div>
                <a className="nav-link navbar25" href="/Quote">
                  Quotes
                </a>
              </li>
            <li className="dropdown">
              <div className="icon25"><FcAbout/></div>
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/WebDesign">
                    Website Design
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/WebFeature">
                    Website Feature
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <li className="dropdown">
          <a type="submit" className="btn btn-outline" href="/Famous">
          Search
        </a></li>
          <li className="dropdown">
              <a
                className="dropdown-toggle btn btn-outline"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Profile
              </a>
              <ul className="profile dropdown-menu">
              <li>
                  <a className="dropdown-item" href="/Profile">
                    My Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Settings">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/Login">
                    Logout
                  </a>
                </li>
              </ul>
            </li>
        </div>
        </div>
      </nav>
      </>
  );
}

export default Navbar1;
