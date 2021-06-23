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
    // console.log(newPerson)
  };
  const [file, setFile] = useState("");

  // For image diplay
  const imageHandler = (e) => {
    // const file = e.target.files[0];
    setFile(e.target.files[0]);
    if (file) {
      const reader = new FileReader();
      console.log(file);
      reader.onloadend = () => {
        person.photo = reader.result;
      };
      reader.readAsDataURL(file);
    } else {
      person.photo = "";
    }
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
        handleSubmit,
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
