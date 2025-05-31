const mongoose = require("mongoose");
const Product = require("./models/product");

// Connect to mongoDB
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/manajemen_app");
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
}
connectDB();

const seedProducts = [
  {
    name: "Sabun Colek",
    brand: "Ekonomi",
    price: 1000,
    description: "Sabun colek ampuh sekali bilas kuman hilang BLASS",
    category: "Kesehatan",
  },
  {
    name: "Sabun Mandi",
    brand: "Nuvo",
    price: 6000,
    description: "Segernya bikin semangat makin Gerr",
    category: "Kesehatan",
  },
  {
    name: "Sabun Mandi",
    brand: "Lifeboy",
    price: 5000,
    description: "99% ampuh basmi kuman",
    category: "Kesehatan",
  },
  {
    name: "Pasta Gigi",
    brand: "Pepsodent",
    price: 7000,
    description: "Melindungi gigi dari kuman dan bebas flek",
    category: "Kesehatan",
  },
  {
    name: "Merica Bubuk",
    brand: "Ladaku",
    price: 1000,
    description: "Dibuat dari 100% Merica asli",
    category: "Bahan Masak",
  },
  {
    name: "Chitato 150gr",
    brand: "Makanan Ringan",
    price: 2000,
    description: "Life is NEVER Flat",
    category: "Makanan Ringan",
  },
];

Product.insertMany(seedProducts)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
