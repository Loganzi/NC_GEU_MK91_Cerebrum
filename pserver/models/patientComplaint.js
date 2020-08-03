const mongoose = require("mongoose");
mongoose.Schema.Types.Boolean.convertToFalse.add("");

const pComplaintSchema = new mongoose.Schema({
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
  time: {
    type: Date,
    default: Date.now,
    required: true,
  },
  bldgroup: {
    type: String,
    required: true,
  },
  newVisitYes: {
    type: Boolean,
    required: false,
    default: false,
  },
  newVisitNo: {
    type: Boolean,
    required: false,
    default: false,
  },
  complaint: {
    type: String,
    required: true,
  },
  temperature: {
    type: Number,
    required: false,
  },
  weight: {
    type: Number,
    required: false,
  },
  BP: {
    type: String,
    required: false,
  },
});

mongoose.model("Complaint", pComplaintSchema);
