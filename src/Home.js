import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { PersonContext } from "./Context";

const Home = () => {
  const { newPerson } = React.useContext(PersonContext);
  return (
    <div className="container">
      <main className="main ">
        <div className="home__main">
          {/* {newPerson.map((item)=> console.log(item))} */}
          {newPerson.map((item) => {
            return (
              <div className="card">
                <div className="user">
                  <img src={item.photo} className="img" alt="img" />

                  <div className="person__info">
                    <h5>{item.name}</h5>
                    <p>{item.email}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="card">
            <Link to="/personal">
              <AiOutlinePlus className="icon" />
            </Link>
            <p>Add Family Member</p>
          </div>
        </div>
        <p className="para">
          Add a family member or click next to go to next step.
        </p>
      </main>
    </div>
  );
};

export default Home;
