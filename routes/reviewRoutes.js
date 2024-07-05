const express = require("express");

const router = express.Router();
const {
  createReview,
  updateReview,
  deleteReview,
  getReview,
} = require("../controllers/reviewController");

router.post("/createReview", createReview);
router.get("/getReview/:id", getReview);
router.put("/updateReview/:id", updateReview);
router.delete("/deleteReview/:id", deleteReview);

exports.router = router;
