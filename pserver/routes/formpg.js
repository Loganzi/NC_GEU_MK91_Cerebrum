const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Form = mongoose.model("Form");

// router.get("/form", (req, res) => {
//   res.send("Hello");
// });
router.post("/form", (req, res) => {
  const {
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
  } = req.body;
  if (!uid || !name || !gender || !bldgroup || !dob || !address) {
    return res.status(422).json({ error: "Please enter all the fields" });
  }
  Form.findOne({ uid: uid }).then((savedUser) => {
    if (savedUser) {
      return res
        .status(422)
        .json({ error: "user already exists with that uid" });
    }
    const patient = new Form({
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
    });

    patient
      .save()
      .then((patient) => {
        res.json({ message: "saved successfully" });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

module.exports = router;
