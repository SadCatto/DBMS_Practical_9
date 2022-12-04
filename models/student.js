const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  roll: {
    type: Number,
    required: true,
  },
  ID: {
    type: String,
    required: true,
    unique: true,
  },
  section :{
    type : String,
    required : true
  },
  dbms: {
    type: Number,
  },
  cn: {
    type: Number,
  },
  daa: {
    type: Number,
  },
  dp: {
    type: Number,
  },
  map: {
    type: Number,
  },
  attendence: {
    type: Number,
  },
});
const Student = mongoose.model("Student", StudentSchema);

module.exports = { Student};
