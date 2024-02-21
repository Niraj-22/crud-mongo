const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
const productRoute = require("./routes/product.route");
dotenv.config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/", productRoute);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database Connected Successfully");
    app.listen(process.env.PORT, () => {
      console.log(`Server Started on Port : ${process.env.PORT}`);
    });
  })
  .catch(() => {
    console.log("Failed");
  });
