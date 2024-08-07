// import React from 'react';
import { Link } from "react-router-dom";
import React from 'react';
import './LandingPage.css'; // Assuming you have a CSS file for styling

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to the Landing Page</h1>
      <div className="container">
        <a href="/food" className="box">
          <div className="box-content">
            <h2>Food</h2>
          </div>
        </a>
        <a href="/groceries" className="box">
          <div className="box-content">
            <h2>Groceries</h2>
          </div>
        </a>
        <a href="/medicines" className="box">
          <div className="box-content">
            <h2>Medicines</h2>
          </div>
        </a>
      </div>
    </div>
  );
}

export default LandingPage;
