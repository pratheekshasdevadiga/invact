const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const reviewSchema = mongoose.Schema(
  {
    movieId: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      default: 1,
      min: 1,
      max: 5,
    },
    description: {
      type: String,
      required: true,
    },
    reviewUserName: {
      type: String,
      required: true,
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

exports.Review = mongoose.model("Review", reviewSchema);
