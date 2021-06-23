import React, { useRef, useState } from "react";
import "./Personal.css";
import { Link } from "react-router-dom";
import { PersonContext } from "./Context";
// import { PersonContext } from "./TempC";

const Personal = () => {
  const { handleChange, handleSubmit, person, imageHandler, file } =
    React.useContext(PersonContext);
  const fileInputRef = useRef();
  return (
    <div className="main ">
      <form>
        <div className="primary">
          <div className="single-info">
            <label htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                name="name"
                className="input"
                placeholder="Name"
                value={person.name}
                onChange={handleChange}
              />
            </label>
          </div>
          <label htmlFor="dob">
            Date of Birth
            <input
              type="date"
              id="dob"
              name="dob"
              className="input dob"
              placeholder="DD/MM/YY"
              value={person.dob}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              type="text"
              className="input"
              name="location"
              id="location"
              placeholder="Location"
              value={person.location}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="occupation">
            Occupation
            <input
              type="text"
              className="input"
              name="occupation"
              id="occupation"
              placeholder="Occupation"
              value={person.occupation}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="contact">
          <div className="single-info">
            <label htmlFor="phone">
              Phone Number
              <input
                type="text"
                id="phone"
                name="phone"
                className="input"
                placeholder="Phone Number"
                value={person.phone}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="email">
              Email
              <input
                type="Email"
                id="email"
                name="email"
                className="input"
                placeholder="Email"
                value={person.email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="sex">
              Sex
              <input
                type="text"
                id="sex"
                name="sex"
                className="input"
                placeholder="Male"
                value={person.sex}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="social__contact">
          <div className="single-info">
            <label htmlFor="facebook">
              Facebook Profile
              <input
                type="text"
                id="facebook"
                name="facebook"
                className="input"
                placeholder="www.facebook.com/johndoe"
                value={person.facebook}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="twitter">
              Twitter Profile
              <input
                type="text"
                id="twitter"
                name="twitter"
                className="input"
                placeholder="www.twitter.com/johndoe"
                value={person.twitter}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="linkedin">
              Linkedin Profile
              <input
                type="text"
                id="linkedin"
                name="linkedin"
                className="input"
                placeholder="www.linkedin.com/johndoe"
                value={person.linkedin}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="uploads">
          <div className="single-info">
            <label htmlFor="photo">
              {/* Upload Photo */}
              <button
                className="btn"
                onClick={(e) => {
                  e.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                Upload
                {/* {file ? `${file.name} uploaded` : "Upload"} */}
              </button>
              <input
                type="file"
                id="photo"
                name="photo"
                className="input"
                placeholder="Select File"
                value={person.photo}
                onChange={imageHandler}
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              {file && <p>{file.name}</p>}
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="sign">
              Upload Signature
              <input
                type="file"
                id="sign"
                name="sign"
                className="input"
                placeholder="Select File"
                value={person.sign}
                onChange={imageHandler}
              />
            </label>
          </div>
        </div>
      </form>
      <div className="btn__container">
        <Link to="/">
          <button className="btn" type="submit" onClick={handleSubmit}>
            Save
          </button>
        </Link>

        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Personal;
