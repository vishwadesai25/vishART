import Navbar from "../Famous";
import Footer from "../footer";
import { famousData } from "../famousData";
import { BsStar } from "react-icons/bs";
import "./data";
import "../navbar.css";

function Famous(props) {
  return (
    <>
      <Navbar product={famousData} />

      {/* <div className="container25">
        {props.product.map((element) => {
          return (
            <>
              <div class="card">
                <div className="card25">
                  <img src={element.image} alt="image" />
                </div>
                <div class="card-body">
                  <p class="card-text">{element.heading}</p>
                  <div class="d-flex justify-content-between align-items-center"></div>
                </div>
              </div>
              <button className="tool-button"><BsStar/></button>

            </>
          );
        })}
      </div> */}
      <Footer />
    </>
  );
}
export default Famous;
