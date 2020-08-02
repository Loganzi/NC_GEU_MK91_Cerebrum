import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Form = () => {
  const [uid, setUID] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [bldgroup, setBldgroup] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");
  const [married, setMarried] = useState("");
  const [occupation, setOccupation] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [relation, setRelation] = useState("");
  const [allergies, setAllergies] = useState("");
  const [surgHist, setSurgHist] = useState("");
  const [obstetric, setObstetric] = useState("");
  const [habits, setHabits] = useState("");

  const PostForm = () => {
    fetch("http://localhost:5000/form", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        uid,
        name,
        gender,
        age,
        bldgroup,
        dob,
        address,
        married,
        occupation,
        height,
        weight,
        relation,
        allergies,
        surgHist,
        obstetric,
        habits,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({ html: data.message, classes: "#43a047 green darken-1" });
          //history.push("/signin");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="FormCard ">
      <div className="formcard input-field">
        <h2 className="regFormH2">Registration Form</h2>
        <input
          type="text"
          placeholder="Aadhar/Ration Card/Govt. ID"
          value={uid}
          onChange={(e) => setUID(e.target.value)}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Blood Group"
          value={bldgroup}
          onChange={(e) => setBldgroup(e.target.value)}
        />
        <input
          type="date"
          placeholder="Date Of Birth"
          value={dob}
          onChange={(e) => setDOB(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <input
          type="text"
          placeholder="Marital Status"
          value={married}
          onChange={(e) => setMarried(e.target.value)}
        />
        <input
          type="text"
          placeholder="Occupation"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <input
          type="number"
          placeholder="Height (in centimeters)"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <input
          type="number"
          placeholder="Weight (in kilograms"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        <input
          type="text"
          placeholder="Son Of/ Daughter Of/"
          value={relation}
          onChange={(e) => setRelation(e.target.value)}
        />
        <input
          type="text"
          placeholder="Allergies"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value)}
        />
        <input
          type="text"
          placeholder="Surgical History"
          value={surgHist}
          onChange={(e) => setSurgHist(e.target.value)}
        />
        <input
          type="text"
          placeholder="Obstetric (Complications during pregnancy"
          value={obstetric}
          onChange={(e) => setObstetric(e.target.value)}
        />
        <input
          type="text"
          placeholder="Habits (Drinking, Smoking, etc)"
          value={habits}
          onChange={(e) => setHabits(e.target.value)}
        />
        <br />
        <br />

        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => PostForm()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Form;
