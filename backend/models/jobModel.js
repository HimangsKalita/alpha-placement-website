const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please Enter job title"],
    
  },
  description: {
    type: String,
    required: [true, "Please Enter job Description"],
  },
  ctc: {
    type: String,
    required: [true, "Please Enter job ctc"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  location: {
    type: String,
    required: [true, "Please Enter job location"],
  },
  startdate: {
    type: String,
    required: [true, "Please Enter start date"],
    default:"Immediately"
  },
    vacancy: {
    type: Number,
    required: [true, "Please Enter job Vacancy"],
    default: 1,
  },
  jobStatus:{
    type: String,
    required: [true, "Please Enter job Status"],
    default: "Full-time",
  },
  user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Job", jobSchema);