import Product from "../models/product.js";

function getProductStatistics() {
  return Product.aggregate([
    {
      $group: {
        _id: null,
        totalProducts: { $sum: 1 },
        averagePrice: { $avg: "$price" },
        highestQuantity: { $max: "$quantity" },
      },
    },
  ]).toArray()[0];
}

export { getProductStatistics };
