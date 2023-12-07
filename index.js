const express = require("express");
const mongoose = require("mongoose");
const app = express();

const uri =
  "mongodb+srv://kaimin134:m437226@baratiecluster.djrvtlt.mongodb.net/?retryWrites=true&w=majority";

async function connect() {
  try {
    await mongoose.connect(uri);
    console.group("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

const productSchema = new mongoose.Schema({
  id: String,
  name: String,
  image: String,
  price: Number,
});

const Product = mongoose.model("Product", productSchema);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
