const Job=require("../models/jobModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");

exports.createjob=catchAsyncErrors(async(req,res,next)=>{

    req.body.user = req.user.id

    const job = await Job.create(req.body);

    res.status(201).json({
        success: true,
        job
      })
});



exports.getAllJobs=catchAsyncErrors( async(req,res,next)=>{

    const jobsCount = await Job.countDocuments();

    const apiFeature = new ApiFeatures(Job.find(),req.query).search();
    const jobs=await apiFeature.query;

    res.status(200).json({
        success: true,
        jobs,
        jobsCount,
    })
})

exports.getJobDetails =catchAsyncErrors( async (req, res, next) => {
    const job = await Job.findById(req.params.id);
    if(!job){
        return next(new ErrorHandler("product not found",404));
    }

    res.status(200).json({
        success:true,
        job,
    })
});

exports.updateJob =catchAsyncErrors( async (req, res, next) => {
    let job = await Job.findById(req.params.id);
    if(!job){
        return next(new ErrorHandler("product not found",404));
    }

    job = await Job.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
      });
    
      res.status(200).json({
        success: true,
        job,
    })
});

exports.deleteJob =catchAsyncErrors( async (req, res, next) => {
    const job = await Job.findById(req.params.id);
    if(!job){
        return next(new ErrorHandler("product not found",404));
    }
    await job.deleteOne();

    res.status(200).json({
        success:true,
        meessage:"Job deleted succesfully"
    })
});




