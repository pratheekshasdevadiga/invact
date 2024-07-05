const asyncHandler = require("express-async-handler");
const { Wishlist } = require("../models/wishlistModel");

exports.createWishlist = asyncHandler(async (req, res) => {
  try {
    const { title, description, genre, year, createdUserId } = req.body;

    if (!title || !description || !genre || !year || !createdUserId || !genre) {
      res.status(400);
      throw new Error("Please provide all required fields");
    }

    const wishlist = await Wishlist.create({
      title,
      description,
      genre,
      year,
      createdUserId,
    });

    res
      .status(201)
      .json({ data: wishlist, message: "Wishlist Created Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.getWishlist = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    let userWishlist = await Wishlist.find({ createdUserId: id });
    res.status(201).json({ data: userWishlist });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.updateWishlist = asyncHandler(async (req, res) => {
  try {
    const {
      createdUserId,
      title,
      description,
      year,
      genre,
      rating,
      isWatched,
    } = req.body;
    const { id } = req.params;

    if (
      !createdUserId ||
      !title ||
      !description ||
      !year ||
      !genre ||
      !rating ||
      !isWatched
    ) {
      res.status(400);
      throw new Error("Please provide all required fields Brp");
    }

    const wishlist = await Wishlist.findById(id);

    if (!wishlist) {
      res.status(404);
      throw new Error("Wishlist not found");
    }

    wishlist.createdUserId = createdUserId;
    wishlist.title = title;
    wishlist.description = description;
    wishlist.year = year;
    wishlist.genre = genre;
    wishlist.rating = rating;
    wishlist.isWatched = isWatched;

    const updatedWishlist = await wishlist.save();

    res.status(200).json({
      data: updatedWishlist,
      message: "Wishlist Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.deleteWishlist = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;

    const wishlist = await Wishlist.findByIdAndDelete(id);

    if (!wishlist) {
      res.status(404);
      throw new Error("Wishlist not found");
    } else {
      res.status(200).json({ message: "Wishlist deleted successfully!" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
