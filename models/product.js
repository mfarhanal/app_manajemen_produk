const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: [
      "Kesehatan",
      "Makanan Ringan",
      "Minuman",
      "Sembako",
      "Bahan Masak",
      "Lain Lain",
    ],
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
