import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Complaint = () => {
  const [uid, setUID] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [bldgroup, setBldgroup] = useState("");
  const [newVisitYes, setVisitYes] = useState("");
  const [newVisitNo, setVisitNo] = useState("");
  const [complaint, setComplaint] = useState("");
  const [temperature, setTemp] = useState("");
  const [weight, setWeight] = useState("");
  const [BP, setBP] = useState("");

  const PostComplaint = () => {
    fetch("http://localhost:5000/pcomplaint", {
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
        newVisitYes,
        newVisitNo,
        complaint,
        temperature,
        weight,
        BP,
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

  function handleChange(e) {
    console.log("new val", e.target.value);
  }

  return (
    <div className="FormCard ">
      <div className="formcard input-field">
        <h2 className="regFormH2">Patient Complaint Form</h2>
        <input
          type="text"
          placeholder="Aadhar/Ration Card/Govt. ID"
          id="Aadhar"
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
        {/* <label>"New Visit or Follow up visit?</label>
        <input
          type="checkbox"
          placeholder="New Visit"
          value={newVisitYes}
          onChange={(e) => setVisitYes(true)}
        />
        <input
          type="checkbox"
          placeholder="Follow Up"
          //value={newVisitNo}
          onChange={(e) => setVisitYes(true)}
        /> */}
        <input
          type="number"
          placeholder="Weight (in kilograms)"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />

        <form action="#" onSubmit>
          <p></p>
          <label>
            <h6>New or follow up check up?</h6>
          </label>
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                checked
                value={newVisitYes}
                onChange={(e) => setVisitYes(true)}
              />
              <span>New Check-up</span>
            </label>
          </p>
          <p>
            <label>
              <input
                name="group1"
                type="radio"
                checked
                value={newVisitNo}
                onChange={(e) => setVisitNo(true)}
              />
              <span>Follow-up</span>
            </label>
          </p>
        </form>

        <input
          type="text"
          placeholder="Temperature (F)"
          value={temperature}
          onChange={(e) => setTemp(e.target.value)}
        />
        <input
          type="text"
          placeholder="Blood Pressure (Sym/Dist)"
          value={BP}
          onChange={(e) => setBP(e.target.value)}
        />
        <br />

        <input
          type="text"
          placeholder="Your Complaint"
          value={complaint}
          onChange={(e) => setComplaint(e.target.value)}
        />

        <br />
        <br />

        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => PostComplaint()}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default Complaint;
