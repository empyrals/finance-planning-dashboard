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

  const handSubmit = () => {
    // setNewPerson((newPerson) => [...newPerson, person])
    setNewPerson([...newPerson, person]);
    setPerson({
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
      photo: "",
      sign: "",
    });
  };
  const [file, setFile] = useState("");

  const imageHandler = (e) => {
    setFile("");
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        person.photo = reader.result;
      }
    };
    console.log(file);
    reader.readAsDataURL(e.target.files[0]);
    setFile(e.target.files[0]);
  };
  const handleChange = (e) => {
    const property = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [property]: value });
  };

  return (
    <PersonContext.Provider
      value={{
        handleChange,
        handSubmit,
        person,
        newPerson,
        imageHandler,
        file,
      }}
    >
      {children}
    </PersonContext.Provider>
  );
};

export { PersonProvider, PersonContext };
