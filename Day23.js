import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: String,
  description: String,
});
const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
});
const Category = mongoose.model("Category", categorySchema);
const Product = mongoose.model("Product", productSchema);

async function getProductsPopulatedWithCategory() {
  try {
    const products = await Product.find().populate("category").exec();
    return products;
  } catch (error) {
    console.error(
      "Error retrieving products with populated category details:",
      error
    );
    return [];
  }
}
async function test() {
  try {
    await mongoose.connect("mongodb://localhost:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const category = await Category.create({
      name: "Electronics",
      description: "Electronic gadgets",
    });
    await Product.create({
      name: "Smartphone",
      description: "Smartphone description",
      price: 500,
      category: category._id,
    });
    const productsWithCategory = await getProductsPopulatedWithCategory();
    console.log(productsWithCategory);
  } catch (error) {
    console.error("Error:", error);
  } finally {
    mongoose.disconnect();
  }
}

test();
