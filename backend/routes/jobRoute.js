const express = require("express");
const { getAllJobs,createjob, updateJob, deleteJob, getJobDetails } = require("../controllers/jobController");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/jobs").get( getAllJobs);
router.route("/company/job/new").post(isAuthenticatedUser, authorizeRoles("company"), createjob);

router.route("/company/job/:id").put(isAuthenticatedUser, authorizeRoles("company"),updateJob).delete(isAuthenticatedUser,authorizeRoles("company"),deleteJob);

router.route("/job/:id").get(getJobDetails);

module.exports = router;