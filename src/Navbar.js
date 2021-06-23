import React from "react";
import "./Navbar.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="section">
      <nav>
        <Link to="/" className="back">
          <BiArrowBack className="back__icon" />
          Back
        </Link>
        <div className="title">
          <h4>Financial Planning Heavy</h4>
        </div>
      </nav>
      <div className="tagline">
        <p>
          Filling the form may take 15-20 mins. Stay calm and fill the form.
        </p>
      </div>
      <div className="sections">
        {/* single section */}
        <div className="single__section active">
          <p className="number">1</p>
          <p>Personal</p>
        </div>
        {/* end of single section */}
        {/* single section */}
        <div className="single__section">
          <p className="number">2</p>
          <p>Income</p>
        </div>
        {/* end of single section */}
        {/* single section */}
        <div className="single__section">
          <p className="number">3</p>
          <p>Expense</p>
        </div>
        {/* end of single section */}
        {/* single section */}
        <div className="single__section">
          <p className="number">4</p>
          <p>Assets</p>
        </div>
        {/* end of single section */}
        {/* single section */}
        <div className="single__section">
          <p className="number">5</p>
          <p>Liability</p>
        </div>
        {/* end of single section */}
        {/* single section */}
        <div className="single__section">
          <p className="number">6</p>
          <p>Risk</p>
        </div>
        {/* end of single section */}
      </div>
    </header>
  );
};

export default Navbar;
