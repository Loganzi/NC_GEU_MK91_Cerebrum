const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  uid: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: false,
  },
  bldgroup: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  married: {
    type: String,
    required: false,
  },
  occupation: {
    type: String,
    required: false,
  },
  address: {
    type: String,
    require: true,
  },
  height: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  relation: {
    type: String,
    required: false,
  },
  allergies: {
    type: String,
    required: false,
  },
  surgHist: {
    type: String,
    required: false,
  },
  obstetric: {
    type: String,
    required: false,
  },
  habits: {
    type: String,
    required: false,
  },
});

mongoose.model("Form", formSchema);
