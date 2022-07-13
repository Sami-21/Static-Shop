import express from "express";
import {
  createProduct,
  getProducts,
  getProductID,
  UpdateProduct,
  deleteProduct,
} from "../controllers";
import { productImage } from "../utility";
const router = express.Router();

//_____Create new product_____//
router.post("/create", productImage, createProduct);

//_____Get all products_____//
router.get("/products", getProducts);

//_____Get product with ID _____//
router.get("/product/:id", getProductID);

//_____Update product with ID_____//
router.patch("/product/:id", productImage, UpdateProduct);

//_____Delete product with ID_____//
router.delete("/product/:id", deleteProduct);

export { router as ProductRouters };
