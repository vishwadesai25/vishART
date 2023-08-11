import React from "react";
import Navbar1 from "./navbar1";
import Footer from "./footer";
import "./navbar.css";

const Home = () => {
  return (
    <>
      <Navbar1 />
      <div id="carouselExampleDark" class="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="1000">
            <img
              src="https://i.ytimg.com/vi/yS1_aNnJPUU/maxresdefault.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Welcome to vishART</h5>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img
              src="https://res.cloudinary.com/dfnunoelk/image/upload/v1690477172/nm1hd5rpa95ot6e33bpc.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Poster Colour</h5>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="1000">
            <img src="./image/bg8.png" class="d-block w-100" alt="..." />
            <div class="carousel-caption d-none d-md-block">
              <h5>Water Colours</h5>
            </div>
          </div>
          <div class="carousel-item">
            <img
              src="https://i.ytimg.com/vi/uhHavqVx318/maxresdefault.jpg"
              class="d-block w-100"
              alt="..."
            />
            <div class="carousel-caption d-none d-md-block">
              <h5>Sketch</h5>
            </div>
          </div>
        </div>
        <div className="slideMap">
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
