import React, { useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";
import { PersonContext } from "./Context";

const Home = () => {
  const { newPerson } = React.useContext(PersonContext);

  console.log("from home", newPerson);
  // useEffect(() => {
  //   console.log('from home', newPerson)
  // }, [])

  return (
    <main className="main home__main">
      <div className="card">
        { newPerson.map((item) => {
          return (
          <div className="card">
            <div className="title">
              {item.name}
            </div>
          </div>)
        }) 
        }

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
