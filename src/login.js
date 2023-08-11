import React from "react";
import { useState } from "react";
import { useNavigate, useRevalidator } from "react-router-dom";
import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [user, setUsers] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUsers((user) => ({
      ...user,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setUsers({
      email: "",
      password: "",
    });
    const res = await fetch("http://localhost:3001/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: user.email,
        password: user.password,
      })
      });
    if (res.status === 500) {
      alert("Wrong email or password");
    } else if (res.status === 404) {
      alert("Data not found");
    } else {
      alert("Successfully Logged in");
      navigate(`/Home`);
    }
  };

  const handleSignUpClick = () => {
    navigate("/Register");
  };
  return (
<div className="container123 fadeInUp">
      <div className="title">Login</div>
      <form>
        <div className="form-group">
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
            onChange={handleChange}
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
            onChange={handleChange}
            className="input"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit" className="button" onClick={handleLogin}>
          Login
        </button>
      </form>

      <br/>
      <p className="button1">
        Don't have an account?{" "}
        <a href="/Register" className="btn btn-outline" onClick={handleSignUpClick}>Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
