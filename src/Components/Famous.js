import React from "react";
import { FaHome } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { LuRectangleHorizontal } from "react-icons/lu";
import { AiOutlineContacts, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";
import { FcAbout } from "react-icons/fc";
import {GrBlockQuote} from "react-icons/gr"
import "./navbar.css";
import { useState, useEffect } from "react";
// import "./famousData";
import axios from "axios"
import Footer from './footer'

function Navbar(props) {
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [search, setSearch] = useState("");

  // const addToFavorites = (data) => {
  //   if (!favorites.some((favorite) => favorite.heading === data.heading)) {
  //     setFavorites([...favorites,data]);
  //   }
  // };

  // const removeFromFavorites = (data) => {
  //   setFavorites(favorites.filter((favorite) => favorite.heading !== data.heading));
  // };

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);
  

  const addToFavorites = (data) => {
    if (!favorites.some((favorite) => favorite.heading === data.heading)) {
      const updatedFavorites = [...favorites, data];
      setFavorites(updatedFavorites);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }
  };
  
  const removeFromFavorites = (data) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.heading !== data.heading);
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };
  

  const toggleFavorites = () => {
    setShowFavorites(!showFavorites);
  };

  const [data,  setdata]=useState([]);
    
  useEffect(()=>{
      axios
      .get(`http://localhost:3001/api/data`)
      .then((response)=>{
          setdata(response.data);
      })
  }, [] );

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            vishART
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                className={`nav-item `}
              >
                <div className="icon25">
                  <FaHome />
                </div>
                <a
                  className="nav-link navbar25 "
                  aria-current="page"
                  href="/Home"
                >
                  Home
                </a>
              </li>
              <li>
                <div className="icon25">
                  <BsStars />
                </div>
                <a
                  className="nav-link navbar25 "
                  aria-current="page"
                  href="/Famous"
                >
                  Famous
                </a>
              </li>
              <li>
                <div className="icon25">
                  <LuRectangleHorizontal />{" "}
                </div>
                <a
                  className="nav-link navbar25 "
                  aria-current="page"
                  href="/Canvas"
                >
                  Canvas
                </a>
              </li>
              <li>
                <div className="icon25">
                  <AiOutlineContacts />
                </div>
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
                <div className="icon25">
                  <FcAbout />
                </div>
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
                  {/* <li>
                  <hr className="dropdown-divider" />
                </li> */}
                </ul>
              </li>
            </ul>

            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                id="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setSearch(e.target.value)}
              />
            </form>

            {/* <a className="dropdown-toggle btn btn-outline"  role="button" onClick={toggleFavorites}>Favorites </a> */}
            <a
                className="btn btn-outline"
                href="#"
                role="button"
                aria-expanded="false"
                onClick={toggleFavorites}
              >
                Favorites
              </a>
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
      {showFavorites && (
        <div className="container25">
          {favorites.map((data) => (
            <div data-aos="fade-up">
            <div className="card23" key={data.heading}>
              <div className="card25">
                <img src={data.image} alt="image" />
              <p className="card-text">{data.heading}</p>
              </div>
            </div>
            </div>
          ))}
        </div>
      )}
      <div className="notice"><div data-aos="flip-left"><p className="lead">Click the Content which you want to add in your favorites !! ;)</p></div></div>
      <div className="container25">
        {props.product
          .filter((element) => {
            return search.toLowerCase() === ""
              ? element
              : element.heading.toLowerCase().includes(search);
          })
          .map((element) => {
            const isFavorite = favorites.some((favorite) => favorite.heading === element.heading);
            return (
                <div ley={element.heading} className="card23">
                   <div data-aos="fade-up">
                  <div className="card25">
                    {isFavorite ? (
                  <button className="card25" onClick={() => removeFromFavorites(element)}><img src={element.image} alt="image"/>
                  <p class="card-text">{element.heading}&nbsp;<AiFillStar/></p></button>
                ) : (
                  <button className="card25" onClick={() => addToFavorites(element)}><img src={element.image} alt="image"/>
                  <p class="card-text">{element.heading}&nbsp;<AiOutlineStar/></p></button>                )}
                  </div>
                </div>
                </div>
            );
          })}
      </div>
      <Footer/>
    </>
  );
}

export default Navbar;
