const AppliedJob = require("../models/appliedModel");
const Job = require("../models/jobModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.applyjob = catchAsyncErrors(async(req,res,next)=>{

        const {
            jobDetails,
            jobStatus
        }=req.body;
    

    const apply = await AppliedJob.create({
        jobDetails,
        jobStatus,
        appliedAt:Date.now(),
        user:req.user._id,

    });

    res.status(201).json({
        success:true,
        apply
    })
});

exports.getSingleApplyDetail = catchAsyncErrors(async (req, res, next) => {
    const apply = await AppliedJob.findById(req.params.id).populate(
      "user",
      "name email"
    );
  
    if (!apply) {
      return next(new ErrorHandler("Application not found with this Id", 404));
    }
  
    res.status(200).json({
      success: true,
      apply,
    });
  });


  exports.myAppliedJobs = catchAsyncErrors(async (req, res, next) => {
    const apply = await AppliedJob.find({ user: req.user._id });
  
    res.status(200).json({
      success: true,
      apply,
    });
  });

  exports.allAppliedJobs = catchAsyncErrors(async (req, res, next) => {
    const apply = await AppliedJob.find();
  
    res.status(200).json({
      success: true,
      apply,
    });
  })


  exports.deleteJobApplication = catchAsyncErrors(async (req, res, next) => {
    const apply = await AppliedJob.findById(req.params.id);
  
    if (!apply) {
      return next(new ErrorHandler("Application not found with this Id", 404));
    }
  
    await apply.deleteOne();
  
    res.status(200).json({
      success: true,
    });
  });
