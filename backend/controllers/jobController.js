const Job=require("../models/jobModel");
const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const ApiFeatures = require("../utils/apifeatures");
const cloudinary = require("cloudinary");

exports.createjob=catchAsyncErrors(async(req,res,next)=>{
    let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "jobs",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
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

exports.getAdminJobs = catchAsyncErrors(async (req, res, next) => {
    const user1=req.params.user
    const query={user:user1}
    const jobs = await Job.find();
  
    res.status(200).json({
      success: true,
      jobs,
    });
  });

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
    for (let i = 0; i < job.images.length; i++) {
      await cloudinary.v2.uploader.destroy(job.images[i].public_id);
    }
  
    await job.deleteOne();

    res.status(200).json({
        success:true,
        meessage:"Job deleted succesfully"
    })
});




