import express, { Request, Response } from "express";
import { createProduct } from "../controllers";
import { productImage } from "../utility";
const router = express.Router();

router.post("/create", productImage, createProduct);

export { router as ProductRouters };
