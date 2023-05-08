const express = require("express");
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");
const { applyjob, getSingleApplyDetail, myAppliedJobs, allAppliedJobs, deleteJobApplication } = require("../controllers/appliedJobController");

const router = express.Router();

router.route("/apply").post(isAuthenticatedUser, applyjob);


router.route("/apply/:id").post(isAuthenticatedUser).get(getSingleApplyDetail);

router.route("/applications/me").get(isAuthenticatedUser, myAppliedJobs);

router.route("/company/applications").get(isAuthenticatedUser, authorizeRoles("company"), allAppliedJobs);

router.route("/company/application/:id").delete(isAuthenticatedUser, authorizeRoles("company"), deleteJobApplication);



module.exports = router;