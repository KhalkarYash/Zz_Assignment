const express = require("express");
const productControllers = require("../controllers/product.controllers");
const router = express.Router();

let products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    stock: 15,
    status: "Active",
  },
  {
    id: 2,
    name: "Desk Chair",
    category: "Furniture",
    price: 199.99,
    stock: 8,
    status: "Active",
  },
];

router.get("/", productControllers.getProducts);

router.post("/", productControllers.addProducts);

router.put("/:id", productControllers.editProduct);

router.delete("/:id", productControllers.deleteProducts);

module.exports = router;
