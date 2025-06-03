const mongoose = require("mongoose");
const express = require("express");
const methodOverride = require("method-override");
const path = require("path");
const app = express();

// Import models
const Product = require("./models/product");

// Connect to Database
async function connectDB() {
  try {
    await mongoose.connect("mongodb://127.0.0.1/manajemen_app");
    console.log("✅ Connected to MongoDB");
  } catch (error) {
    console.error("❌ Connection error:", error);
  }
}
connectDB();

// Setting view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Welcome to manajemen App");
});

app.get("/products", async (req, res) => {
  try {
    // console.log(req.query);
    const { category } = req.query;
    if (category) {
      const products = await Product.find({ category }); //Memfilter product berdasarkan category
      console.log({ products, category }); //buat cek kalau products sama category berhasil dikirim
      return res.render("products/lists", { products, category });
    }
    const products = await Product.find({});
    console.log({ products, category });
    res.render("products/lists", { products });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/products/create", (req, res) => {
  try {
    res.render("products/create");
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/products", async (req, res) => {
  try {
    console.log(req.body);
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log(product);
    res.render("products/details", { product });
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/products/:id/edit", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
  } catch (error) {
    console.error(error.message);
  }
});

app.put("/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect(`/products/${product._id}`);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(3000, () => {
  try {
    console.log("App listening on http://127.0.0.1:3000");
  } catch (error) {
    console.error(error.message);
  }
});
