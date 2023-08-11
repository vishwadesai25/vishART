import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div class="container2">
        <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
          <div class="col mb-3">
            <a
              href="/"
              class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <svg class="bi me-2" width="40" height="32"></svg>
            </a>
            <div className="footer10">
              <p class="text-body-secondary">&copy; 2023</p>
              <a href="#">Back to top</a>
            </div>
          </div>

          <div class="col mb-3"></div>

          <div class="col mb-3">
            <h5>Reference</h5>
            <br />
            <br />
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://in.pinterest.com/"
                  class="nav-link10 p-0 text-body-secondary"
                >
                  pinterest
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://unsplash.com/s/photos/reference"
                  class="nav-link10 p-0 text-body-secondary"
                >
                  UnSplash
                </a>
              </li>
            </ul>
          </div>

          <div class="col mb-3">
            <h5>Technology</h5>
            <br />
            <br />
            <ul class="nav flex-column">
              <li class="nav-item mb-2">
                <a
                  href="https://getbootstrap.com/"
                  class="nav-link10 p-0 text-body-secondary"
                >
                  Bootstrap
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="nodejs.org/en"
                  class="nav-link10 p-0 text-body-secondary"
                >
                  Node
                </a>
              </li>
              <li class="nav-item mb-2">
                <a
                  href="https://react.dev/"
                  class="nav-link10 p-0 text-body-secondary"
                >
                  React
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
