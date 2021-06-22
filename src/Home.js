import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const Home = () => {
  return (
    <main className="main home__main">
      <div className="card">
        <Link to="/personal">
          <AiOutlinePlus className="icon" />
        </Link>
        <p>Add Family Member</p>
      </div>
      <p>Add a family member or click next to go to next step.</p>
    </main>
  );
};

export default Home;
