const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  forgotPassword,
  resetpassword,
  getUserDetails,
  updatePassword,
  updateProfile,
  getAllUser,
  getSingleUser,
  updateUserRole,
  deleteuser,
} = require("../controllers/userController");
const {
  isAuthneticatedUser,
  authorizeRoles,
} = require("../middleware/auth.js");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetpassword);

router.route("/logout").post(logout);

router.route("/me").get(isAuthneticatedUser, getUserDetails);
router.route("/password/update").put(isAuthneticatedUser, updatePassword);
router.route("/me/update").put(isAuthneticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthneticatedUser, authorizeRoles("admin"), getAllUser);

router
  .route("/admin/users/:id")
  .get(isAuthneticatedUser, authorizeRoles("admin"), getSingleUser)
  .put(isAuthneticatedUser, authorizeRoles("admin"), updateUserRole)
  .delete(isAuthneticatedUser, authorizeRoles("admin"), deleteuser);

module.exports = router;
