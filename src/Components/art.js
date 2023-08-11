import Navbar from "./Famous";
import Footer from "./footer";
import { artData } from "./artData";
import "./navbar.css";

function Art(props) {
  return (
    <>
      <Navbar product={artData} />
      <Footer />
    </>
  );
}
export default Art;
