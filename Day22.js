import mongoose from "mongoose";
import express from "express";

const app = express();

const Product = mongoose.model("Product", {
  name: {
    type: String,
    required: True,
  },
  price: {
    type: Number,
    required: True,
  },
  quantity: {
    type: Number,
    default: 1,
  },
});

async function createProduct(product) {
  try {
    const newProduct = new Product(product);
    await newProduct.save();
  } catch (err) {
    console.log(err);
  }
}

async function getAllProducts() {
  try {
    const products = await Product.find();
  } catch (err) {
    console.log(err);
  }
}

async function updateProduct(productId, updatedProduct) {
  try {
    const product = await Product.findByIdAndUpdate(productId, updatedProduct, {
      new: true,
    });
  } catch (err) {
    console.log(err);
  }
}

async function deleteProduct(productId) {
  try {
    const product = await Product.findByIdAndDelete(productId);
  } catch (err) {
    console.log(err);
  }
}

mongoose.connect("mongodb://localhost/mydatabase", {});

app.get("/products", async (req, res) => {
  const products = await getAllProducts();
  res.json(products);
});

app.post("/add-product", async (req, res) => {
  const product = req.body;
  await createProduct(product);
  res.json({ message: "Product added successfully" });
});

app.put("/update-product/:id", async (req, res) => {
  const productId = req.params.id;
  const updatedProduct = req.body;
  await updateProduct(productId, updatedProduct);
  res.json({ message: "Product updated successfully" });
});

app.delete("/delete-product/:id", async (req, res) => {
  const productId = req.params.id;
  await deleteProduct(productId);
  res.json({ message: "Product deleted successfully" });
});
