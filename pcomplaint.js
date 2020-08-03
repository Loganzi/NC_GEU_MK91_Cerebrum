const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Complaint = mongoose.model("Complaint");

// router.get("/form", (req, res) => {
//   res.send("Hello");
// });
router.post("/pcomplaint", (req, res) => {
  const {
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
  } = req.body;
  //   if (!newVisitNo && !newVisitYes) {
  //     return res
  //       .status(422)
  //       .json({ error: "Please enter if this is a new visit or not" });
  // }
  if (
    !uid ||
    !name ||
    !gender ||
    !bldgroup ||
    !complaint ||
    !weight ||
    !BP ||
    !temperature
  ) {
    return res.status(422).json({ error: "Please enter all the fields" });
  }
  //   Form.findOne({ uid: uid }).then((savedUser) => {
  //     if (savedUser) {
  //       return res
  //         .status(422)
  //         .json({ error: "user already exists with that uid" });
  //     }
  const patientComplaint = new Complaint({
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
  });

  patientComplaint
    .save()
    .then((patientComplaint) => {
      res.json({ message: "saved successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
