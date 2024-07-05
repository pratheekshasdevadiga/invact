const asyncHandler = require("express-async-handler");
const { Review } = require("../models/reviewModel");

exports.createReview = asyncHandler(async (req, res) => {
  try {
    const { movieId, rating, description, reviewUserName } = req.body;

    if (!movieId || !rating || !description || !reviewUserName) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const review = await Review.create({
      movieId,
      rating,
      description,
      reviewUserName,
    });

    res
      .status(201)
      .json({ data: review, message: "Review added successfully!!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }
    const reviews = await Review.find({ movieId: id });

    res.status(201).json({ data: reviews });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.updateReview = asyncHandler(async (req, res) => {
  try {
    const { movieId, rating, description, reviewUserName } = req.body;
    const { id } = req.params;

    if (!movieId || !rating || !description || !reviewUserName) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const review = await Review.findById(id);

    if (!review) {
      res.status(404);
      throw new Error("Review not found");
    }

    // Update review fields
    review.movieId = movieId;
    review.rating = rating;
    review.description = description;
    review.reviewUserName = reviewUserName;

    const updatedReview = await review.save();

    res.status(200).json({
      data: updatedReview,
      message: "Review updated successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.deleteReview = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const review = await Review.findByIdAndDelete(id);

    if (!review) {
      res.status(404);
      throw new Error("Review not found");
    } else {
      res.status(200).json({ message: "Review deleted successfully!!!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
