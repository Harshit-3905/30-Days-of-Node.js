import Product from "./Day24.js";
function createProductNameIndex() {
  Product.collection.createIndex({ name: 1 }, (err, result) => {
    if (err) {
      console.error("Error creating index:", err);
    } else {
      console.log("Index created successfully:", result);
    }
  });
}

export { createProductNameIndex };
