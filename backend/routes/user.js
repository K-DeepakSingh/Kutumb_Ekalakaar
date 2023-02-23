const express = require("express");
const router = express.Router();

const {
  getUser,
  getUserById,
  updateUser,
  getPatron,
  updatePatron,
  registerPatron,
  getUserByFilter,
  registerUser,
  upload,
  getUserByEmail,
  getByEmail,
  forgotPassword,
  resetPassword,
  userQuery,
  getAllQueries,
} = require("../controller/user");
const { isSignedIn, isAuthenticated, isPatron, isAdmin } = require("../controller/auth");

router.param("userId", getUserById);
router.param("emailId", getUserByEmail);
//get route for artist information by id
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser); //get user information ie Artist

//get information of patron (role should be 1)
router.get("/patron/:userId", isSignedIn, isAuthenticated, isPatron, getPatron); //get patron user information

//register user route
router.put("/users/register/:userId", isSignedIn, isAuthenticated, upload.single("photo"), registerUser);

//update user route
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

//register patron route
router.put("/patron/register/:userId", isSignedIn, isAuthenticated, isPatron, registerPatron);

//edit patron route
router.put("/patron/update/:userId", isSignedIn, isAuthenticated, isPatron, updatePatron);

//get patron by filter
router.get("/patron/filters/users", getUserByFilter);

//get user information by emial
router.get("/user/info/:emailId", getByEmail);

//forgot password
router.post("/user/forgotpassword", forgotPassword);

//reset Password
router.post("/user/resetpassword", resetPassword);

//post a query
router.post("/user/query", userQuery);

// fetch all query (admin protected routes)
router.get("/users/allQueries", getAllQueries);

module.exports = router;
