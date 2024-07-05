const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require("./routes/reviewRoutes");
const wishlistRoutes = require("./routes/wishlistRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

const PORT = process.env.PORT || 5000;
console.log("PORT=", PORT);
const app = express();
app.use(cors());
dotenv.config();
connectDB();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.use("/api/users", userRoutes.router);
app.use("/api/review", reviewRoutes.router);
app.use("/api/wishlist", wishlistRoutes.router);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
