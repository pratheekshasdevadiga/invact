const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const wishlistSchema = mongoose.Schema(
  {
    createdUserId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    year: {
      type: Date,
      required: true,
    },
    isWatched: {
      type: String,
      default: "unwatched",
    },
    genre: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
  },
  {
    timestamps: true,
  }
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

// // will encrypt password everytime its saved
// userSchema.pre("save", async function (next) {
//   if (!this.isModified("password")) {
//     next();
//   }
//   const salt = await bcrypt.genSalt(10);
//   this.password = await bcrypt.hash(this.password, salt);
// });

exports.Wishlist = mongoose.model("Wishlist", wishlistSchema);
