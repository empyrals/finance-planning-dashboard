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
  const [newPerson, setNewPerson] = useState([]);

  const handleSubmit = () => {
    setNewPerson((newPerson) => [...newPerson, person]);
    console.log(newPerson);
  };

  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
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
