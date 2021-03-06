import React, { useRef, useState } from "react";
import "./Personal.css";
import { Link, useHistory } from "react-router-dom";
import { PersonContext } from "./Context";

const Personal = () => {
  // from context
  const { handleChange, handleSubmit, person, imageHandler, file } =
    React.useContext(PersonContext);
  const fileInputRef = useRef();

  // form validation
  let history = useHistory();
  const [error, setError] = useState({
    name: "",
    photo: "",
  });

  const handleFormValidation = () => {
    if (person.name === "" || person.photo === "") {
      if (person.name === "") {
        return setError((prev) => ({ ...prev, name: "Req" }));
      }
      if (person.photo === "") {
        return setError((prev) => ({ ...prev, photo: "Req" }));
      }
      if (person.email === "") {
        return setError((prev) => ({ ...prev, email: "Req" }));
      }
    }

    handleSubmit();
    history.push("/");
  };

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
                // {...register("name")}
                className="input"
                placeholder="Name"
                value={person.name}
                onChange={handleChange}
              />
              {error.name ? <span>{error.name}</span> : null}
              {/* {errors.name && <p className="error">Name is required.</p>} */}
            </label>
          </div>
          <label htmlFor="dob">
            Date of Birth
            <input
              type="date"
              id="dob"
              name="dob"
              // {...register("dob")}
              className="input dob"
              placeholder="DD/MM/YY"
              value={person.dob}
              onChange={handleChange}
            />
            {/* {errors.name && <p className="error">Enter Date of Birth.</p>} */}
          </label>
          <label htmlFor="location">
            Location
            <input
              type="text"
              className="input"
              // name="location"
              // {...register("location")}
              id="location"
              placeholder="Location"
              value={person.location}
              onChange={handleChange}
            />
            {/* {errors.name && <p className="error">Enter your location</p>} */}
          </label>
          <label htmlFor="occupation">
            Occupation
            <input
              type="text"
              className="input"
              // name="occupation"
              // {...register("occupation")}
              id="occupation"
              placeholder="Occupation"
              value={person.occupation}
              onChange={handleChange}
            />
            {/* {errors.name && <p className="error">Enter Occupation</p>} */}
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
              {/* {errors.phone && <p className="error">Enter valid Phone no.</p>} */}
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
              {/* {errors.phone && <p className="error">Enter valid E-mail</p>} */}
            </label>
          </div>
          <div className="single-info">
            <label htmlFor="sex">
              Sex
              <select
                // {...register("sex")}
                value={person.sex}
                onChange={handleChange}
                className="input"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {/* {errors.sex && <p className="error">Select Gender</p>} */}
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
                // name="facebook"
                // {...register("facebook")}
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
                // name="twitter"
                // {...register("facebook")}
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
                // name="linkedin"
                // {...register("facebook")}
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
                // value={person.photo}
                onChange={imageHandler}
                accept=".png, .jpg, .jpeg"
                style={{ display: "none" }}
                ref={fileInputRef}
              />
              {error.photo ? <span>{error.photo}</span> : null}

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
        <button className="btn" type="submit" onClick={handleFormValidation}>
          Save
        </button>

        <button className="btn">Next</button>
      </div>
    </div>
  );
};

export default Personal;
