import React from "react";
import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  let name, value;
  const handleOnChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setuser({ ...user, [name]: value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setuser({
  //     username: "",
  //     email: "",
  //     password: "",
  //   });
  //   const response = await axios
  //     .post("http://localhost:3001/Register", user)
  //     .then(response => {
  //       if(response.data.success)
  //         alert("User Successfully Registered")
  //     })
  //     .catch((error) => {
  //       if (error.response) {
  //         if (error.response.status === 501) {
  //           alert("User already exist");
  //         } else {
  //           alert("An error occurred. Please try again later.");
  //         }
  //       } else if (error.request) {
  //         alert(
  //           "No response received from the server. Please check your connection."
  //         );
  //       } else {
  //         alert("An error occurred. Please try again later.");
  //       }
  //     });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setuser({
      username: "",
      email: "",
      password: "",
    });
    const response = await axios
      .post("http://localhost:3001/Register", user)
      .then(response => {
        if(response.data.success){
          alert("User successfully registered")
          navigate('./Login')
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 501) {
            alert("User already exist");
          } else {
            alert("An error occurred. Please try again later.");
          }
        } else if (error.request) {
          alert(
            "No response received from the server. Please check your connection."
          );
        } else {
          alert("An error occurred. Please try again later.");
        }
      });
  };

  const handleLogin = () => {
    navigate("/Login");
  };

  return (
    <>
      <div className="container3">
        <div className="container122 fadeInUp">
          <div className="title">Sign Up</div>
          <form>
            <div className="form-group">
              <label htmlFor="username" className="label">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={user.username}
                onChange={handleOnChange}
                className="input"
                placeholder="Enter your username"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="label">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={user.email}
                className="input"
                placeholder="Email"
                onChange={handleOnChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={user.password}
                onChange={handleOnChange}
                className="input"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="button" onClick={handleSubmit}>
              Sign Up
            </button>
          </form>

          <br />
          <p>
            Already have an account?{" "}
            <a href="/Login" className="btn btn-outline" onClick={handleLogin}>
              Login
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
