const express = require("express");
const router = express.Router();

const {
  createOpportunity,
  updateOpportunity,
  getOpportunityId,
  getAllOpportunity,
  getEmailId,
  applyOpportunity,
  getAllOpportunities,
  removeOpportunity,
  shortListAnArtist,
  hireListAnArtist,
  rejected,
  findAnOpportunity,
  getOpportunityById,
  deleteOpportunityById,
} = require("../controller/opportunity");
const { getUser, getUserById, updateUser, getPatron, updatePatron, registerPatron, getUserByFilter, registerUser, upload, getAllUsers, getUserByEmail } = require("../controller/user");
const { isSignedIn, isAuthenticated, isPatron } = require("../controller/auth");

router.param("userId", getUserById);
router.param("opportunityId", getOpportunityId);
router.param("emailId", getEmailId);

//create or post new opportunity
router.post("/patron/create/opportunity/:userId", isSignedIn, isAuthenticated, isPatron, createOpportunity);

//update the opportuity
router.put("/patron/update/opportunity/:opportunityId", updateOpportunity);

//get all opportunities by patron using the email:
router.get("/patron/opportunity/all/:emailId", getAllOpportunity);

// routes added by Gokul Suthar
router.get("/getAllOpportunities", getAllOpportunities);
router.get("/getAllUsers", getAllUsers);
router.get("/getUserByEmail", getUserByEmail);
// routes added by Gokul Suthar

//apply for opportunity
// router.put("/user/apply/opportunity/:opportunityId",applyOpportunity) //send parameter in body email of artist and set hired statuus=0

router.put("/user/apply/opportunity/:opportunityId", applyOpportunity); //send parameter in body email of artist and set hired statuus=0

//for eg.
//{
//     "applied_by":{
//     "emailid":"Saurav54muke@gmai.com",
//     "hired_status":0
//       }
// }

router.post("/user/apply/opportunity/:opportunityId", removeOpportunity);

//shortlist
router.post("/user/shortlist/opportunity/:opportunityId/:emailId", shortListAnArtist);

//hire
router.post("/user/hire/opportunity/:opportunityId/:emailId", hireListAnArtist);

//reject
router.post("/user/reject/opportunity/:opportunityId/:emailId", rejected);

//search an opportunity
router.post("/user/getOpportunities", findAnOpportunity);

router.get("/user/getOpportunity/:opportunityId", getOpportunityById);

router.delete("/user/delete/getOpportunity/:opportunityId", deleteOpportunityById);

module.exports = router;
