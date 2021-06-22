import React, { useState, useContext } from "react";

const PersonContext = React.createContext();
const PersonProvider = ({ children }) => {
  const [person, setPerson] = useState({
    name: "",
    dob: "",
    location: "",
    occupation: "",
    phone: "",
    email: "",
    sex: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  });
  const [newPerson, setNewPerson] = useState({});
  const handleSubmit = () => {
    // e.preventDefault();
    // console.log(person);
    const check =
      person.name &&
      person.dob &&
      person.email &&
      person.phone &&
      person.occupation;
    // let newPerson = {};
    if (check) {
      setNewPerson({ ...person, id: new Date().getTime().toString() });
      //   return newPerson;
    } else {
      console.log("empty values");
    }
  };
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    // console.log(property, value);
    setPerson({ ...person, [property]: value });
  };
  return (
    <PersonContext.Provider
      value={{ handleChange, handleSubmit, person, newPerson }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export { PersonProvider, PersonContext };
