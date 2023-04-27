const mongoose = require("mongoose");

const applySchema = new mongoose.Schema({

    jobDetails:[
        {
            title: {
              type: String,
              required: true,
            },
            description: {
              type: String,
              required: true,
            },
            ctc: {
              type: String,
              required: true,
            },
            images: {
              type: String,
              required: true,
            },
            vacancy:{
              type: Number,
              required: true,
            },
            job: {
              type: mongoose.Schema.ObjectId,
              ref: "Job",
              required: true,
            },
          },
    ],
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User",
        required:true,
    },
    applicationStatus:{
        type: String,
        required: true,
        default: "Received",
    },
    appliedAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model("AppliedJob", applySchema);