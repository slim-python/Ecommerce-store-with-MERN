const express = require("express");

const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  sendMessage,
} = require("../controllers/orderController");

const router = express.Router();

const { isAuthneticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthneticatedUser, newOrder);

router.route("/order/:id").get(isAuthneticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthneticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthneticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthneticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthneticatedUser, authorizeRoles("admin"), deleteOrder);

router.route("/order/success").post(isAuthneticatedUser, sendMessage);
module.exports = router;
