const express = require("express");
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentController");
const router = express.Router();

const { isAuthneticatedUser } = require("../middleware/auth.js");

router.route("/payment/process").post(isAuthneticatedUser, processPayment);

router.route("/stripeapikey").get(isAuthneticatedUser, sendStripeApiKey);

module.exports = router;
