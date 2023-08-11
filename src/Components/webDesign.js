import React from "react";
import Navbar from "./navbar1";
import Footer from "./footer";

const TechnologyList = ({ heading, items }) => {
  return (
    <div className="webDesign">
      <h2>{heading}</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const technologyItems = [
    "aos: ^2.3.4",
    "axios: ^1.4.0",
    "bcrypt: ^5.1.0",
    "cors: ^2.8.5",
    "express: ^4.18.2",
    "html2canvas: ^1.4.1",
    "jspdf: ^2.5.1",
    "mongoose: ^0.0.5",
    "nodemon: ^3.0.1",
    "react: ^18.2.0",
    "react-dom: ^18.2.0",
    "react-icons: ^4.10.1",
    "react-router-dom: ^6.14.2",
    "react-scripts: 5.0.1",
    "web-vitals: ^2.1.4",
  ];

  const databaseItems = ["MongoDB"];

  const Frontend = ["1. aos", "2. bootstrap", "3. react-icons", "4. CSS"];

  const Libraries = [
    "1. axios",
    "2. mongoose",
    "3. nodemon",
    "4. express",
    "5. cors",
  ];

  const Packages = [
    "react",
    "react-dom",
    "react-icons",
    "react-router-dom",
    "react-scripts",
  ];

  return (
    <div>
      <Navbar />
      <div data-aos="fade-right" >
        <h1 className="webDesign1">My Tech Stack</h1>
        <div classname="info23">
          <TechnologyList
            classname="webDesign"
            heading="Frontend"
            items={Frontend}
          />
          <TechnologyList
            classname="webDesign"
            heading="Libraries"
            items={Libraries}
          />
          <TechnologyList
            classname="webDesign"
            heading="Database"
            items={databaseItems}
          />
          <TechnologyList
            classname="webDesign"
            heading="Packages"
            items={Packages}
          />
        </div>
        <div classname="info24">
          <TechnologyList
            classname="Versions"
            heading="Technologies"
            items={technologyItems}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
