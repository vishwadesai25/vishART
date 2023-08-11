import React, { useState } from "react";
import Navbar1 from "./navbar1";
import Footer from "./footer";
import axios from "axios";

const Contact = (props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  let name, value;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    const response = await axios
      .post("http://localhost:3001/Contact", formData)
      .then((response) => {
        if (response.data.success) {
          alert("User Successfully Registered");
        }
      });
  };

  return (
    <>
      <Navbar1 />
      <div classname="container314">
        <div className="left-side-content">
        <div data-aos="fade-right">
          <h1>Contact Us</h1>
          <p>You can reach out to us through the following channels:</p>
          <ul>
            <li>Email: vishART@example.com</li>
            <li>Phone: +1 5462135753</li>
            <li>Address: 123 Main St, City, Country</li>
          </ul>
        </div>
        </div>
        <div className="container14 fadeInUp">
          <form>
            <div className="form-group">
              <label className="label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter your name"
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="input"
              />
            </div>
            <div className="form-group">
              <label className="label" htmlFor="message">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                placeholder="Enter your message for us "
                onChange={handleChange}
                required
                className="input"
              />
            </div>
            
            <button type="submit" className="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
