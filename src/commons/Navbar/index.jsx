import React from "react";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-content-container">
        <div className="navbar-text-container">
          <h3 className="h3-navbar-text">Home</h3>
          <h3 className="h3-navbar-text">About me</h3>
        </div>
        <div className="navbar-buttons-container">
          <button className="navbar-button">
            <h4 className="h4-button-text">Projects</h4>
          </button>
          <button className="navbar-button">
            <h4 className="h4-button-text">Lets get in touch</h4>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
