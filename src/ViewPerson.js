import React from "react";
import { PersonContext } from "./Context";

const ViewPerson = () => {
  const { newPerson, person } = React.useContext(PersonContext);
  return (
    <div>
      {/* {newPerson.map((item) => {
        console.log(item);
      })} */}
      {console.log(newPerson)}
      {/* {console.log(person)} */}
    </div>
  );
};

export default ViewPerson;
