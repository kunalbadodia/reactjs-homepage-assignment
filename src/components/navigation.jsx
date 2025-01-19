import React from "react";
import "./navbar.css";
import { FaChevronDown, FaPhone, FaEnvelope, FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaSearch } from "react-icons/fa";

export const Navigation = (props) => {
  return (
    <React.Fragment>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="contact-info">
            <div className="info-item">
              <FaEnvelope style={{ marginLeft: "25px", marginRight: "-10px" }} />
              <span>kunalbadodia@gmail.com</span>
            </div>
            <div className="gradient-divider"></div>

            <div className="info-item">
              <FaPhone style={{ marginRight: "-10px" }} />
              <span>+91-9669123579</span>
            </div>
            <div className="gradient-divider"></div>
            <div className="social-icons">
              <FaInstagram className="social-icon" />
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaPinterest className="social-icon" />
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            {/* Logo */}
            <a className="navbar-brand page-scroll" href="#page-top" style={{ position: "relative" }}>
              <img
                src="/img/logoo.png"
                alt="Register Karo Logo"
                style={{ height: "40px", width: "auto" }}
              />
              <img
                src="/img/hat.png"
                alt="Christmas Hat"
                className="christmas-hat"
              />
            </a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="#Home" className="page-scroll">Home</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#services" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Our Services
                  <FaChevronDown style={{ marginLeft: "5px" }} />
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#service1">Service 1</a>
                  <a className="dropdown-item" href="#service2">Service 2</a>
                  <a className="dropdown-item" href="#service3">Service 3</a>
                </div>
              </li>
              <li><a href="#Blog" className="page-scroll">Blog</a></li>
              <li><a href="#contact Us" className="page-scroll">Contact Us</a></li>
              <li><a href="#about us" className="page-scroll">About us</a></li>
              <li><a href="#search" className="page-scroll"><FaSearch style={{ fontSize: "20px" }} /></a></li>
              <li><a href="#talk-expert" className="talk-expert-btn">Talk an Expert</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full Page Image Section */}
      <div className="full-image">
        <img src="/img/intro-bg.png" alt="Full Page Background" />
        <div className="content-left">
          <h5 className="google-rating">
            <img
              src="/img/Bstar.png"
              alt="Bstar"
              className="bstar-image"
              style={{ marginRight: "5px" }}
            />
            <span>Google Rating</span>
            <img
              src="/img/img.png"
              alt="Bstar"
              className="bstar-img"
              style={{ marginLeft: "5px" }}
            />
          </h5>
          <div className="trusted-partner-container">
            <h1 className="trusted-partner-title">Your Trusted Partner</h1>
            <h2 className="trusted-partner-subtitle">For Compliance Business Needs</h2>
          </div>
        </div>

        <div className="compliance-platform">
          <p>An online business compliance platform that helps entrepreneurs and <br />other individuals with various <strong>registrations,</strong> <strong>tax filings</strong>, and other <strong>legal <br />matters.</strong></p>
        </div>

        <img
          src="/img/data.png"
          alt="data"
          className="data-img"
          style={{ marginLeft: "8px" }}
        />
        <img
          src="/img/video.png"
          alt="video"
          className="video-img"
          style={{ marginLeft: "8px", cursor: "pointer"}}
        />

        <a href="#" className="talk-expert-btn-bottom">Talk An Expert</a>
      </div>

      {/* Wrap all content except navbar, topbar, and background */}
      <div className="content-wrapper">
        {/* Add more content that you want to adjust */}
        <p>Additional content can go here</p>
      </div>
    </React.Fragment>
  );
};
