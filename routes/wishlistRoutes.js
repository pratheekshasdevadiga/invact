const express = require("express");
const router = express.Router();
const {
  createWishlist,
  updateWishlist,
  deleteWishlist,
  getWishlist,
} = require("../controllers/wishlistController");

router.post("/createWishlist", createWishlist);
router.get("/getWishlist/:id", getWishlist);
router.put("/updateWishlist/:id", updateWishlist);
router.delete("/deleteWishlist/:id", deleteWishlist);

exports.router = router;
