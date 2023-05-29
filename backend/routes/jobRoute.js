const express = require("express");
const { getAllJobs,createjob, updateJob, deleteJob, getJobDetails, getAdminJobss, getAdminJobs } = require("../controllers/jobController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/jobs").get( getAllJobs);
// router.route("/company/jobs").get(isAuthenticatedUser,authorizeRoles("company"),getAdminJobs);
router.route("/company/jobs").get(isAuthenticatedUser,getAdminJobs);

router.route("/company/job/new").post(isAuthenticatedUser, authorizeRoles("company"), createjob);

// router.route("/company/job/:id").put(isAuthenticatedUser, authorizeRoles("company"),updateJob).delete(isAuthenticatedUser,authorizeRoles("company"),deleteJob);
router.route("/company/job/:id").put(isAuthenticatedUser, authorizeRoles("company"),updateJob).delete(isAuthenticatedUser,deleteJob);

router.route("/job/:id").get(getJobDetails);

module.exports = router;