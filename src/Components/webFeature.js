import Navbar from "./navbar1";
import Footer from "./footer";
import React from 'react';

const WebFeature = () => {
  return (
    <>
    <Navbar/>
    <div className="web-feature-container">
      <div className="content">
      <section className="section">
          <h2>Main</h2>
          <p>Just like starting intro of website.</p>
        </section>

      <section className="section">
          <h2>User Registration</h2>
          <p>Register an account to access personalized features and functionalities.</p>
        </section>

        <section className="section">
          <h2>User Login</h2>
          <p>Log in to your account to enjoy a seamless experience across the website.</p>
        </section>

        <section className="section">
          <h2>Profile</h2>
          <p>Users profile details.</p>
        </section>

        <section className="section">
          <h2>Home</h2>
          <p>Welcome to our website! This section features a welcoming slideshow.</p>
        </section>

        <section className="section">
          <h2>Search</h2>
          <p>To search in data displayed on website.</p>
        </section>
        </div>
        <div className="content1">
        <section className="section">
          <h2>Famous Artists</h2>
          <p>Explore the works of famous artists. Paintings and names are fetched from an API.</p>
        </section>

        <section className="section">
          <h2>Canvas Drawing</h2>
          <p>Have fun drawing on our interactive canvas! You can also save your drawings as PDF.</p>
        </section>

        <section className="section">
          <h2>Contact Us</h2>
          <p>Send us a message or inquire about anything you'd like to know.</p>
        </section>

        <section className="section">
          <h2>Art Gallery</h2>
          <p>Including your own creations.</p>
        </section>

        <section className="section">
          <h2>Favorites</h2>
          <p>Save your favorite artists and artworks to your favorites collection.</p>
        </section>

        <section className="section">
          <h2>Art Quotes</h2>
          <p>Get inspired by art-related quotes and ideas.</p>
        </section>

        <section className="section">
          <h2>Web Design</h2>
          <p>Learn about the technologies and design principles used to create our website.</p>
        </section>

        <section className="section">
          <h2>Web Feature</h2>
          <p>Learn about the Features of our website.</p>
        </section>

        <section className="section">
          <h2>Footer</h2>
          <p>Includes few links and a button to go at top of the website.</p>
        </section>

      </div>

    </div>
    <Footer/>
    </>
  );
};

export default WebFeature;
