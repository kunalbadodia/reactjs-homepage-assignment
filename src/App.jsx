import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  // Setting up the landing page data on load
  useEffect(() => {
    setLandingPageData(JsonData);

    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Cleanup function to restore scroll when component is unmounted
    return () => {
      document.body.style.overflow = 'auto'; // or 'scroll' to allow scrolling again
    };
  }, []);

  return (
    <div className="App">
      {/* The Navigation component will render only the home page content */}
      <Navigation />

      {/* You can add the header if it’s part of the homepage content */}
      <div className="home-content">
        <h1>{landingPageData.Header?.title}</h1>
        <p>{landingPageData.Header?.description}</p>
      </div>
    </div>
  );
};

export default App;
