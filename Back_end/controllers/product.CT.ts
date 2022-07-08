import express, { Request, Response } from "express";
import { ProductMD } from "../model";

import { CreateProduct } from "../Data";
export const createProduct = async (req: Request, res: Response) => {
  const { title, description, product_Type, category, tag, rating, price } = <
    CreateProduct
  >req.body;
  const files = req.files as [Express.Multer.File];
  try {
    const product = await ProductMD.create({
      title: title,
      description: description,
      product_Type: product_Type,
      category: category,
      tag: tag,
      rating: rating,
      image: files[0].filename,
      price: price,
    });
    return res.status(200).send(product);
  } catch (error) {
    return res.status(400).send(error);
  }
};
