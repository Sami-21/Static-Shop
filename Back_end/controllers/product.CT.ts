import express, { Request, Response } from "express";
import { ProductMD } from "../model";

import { CreateProduct, Update } from "../Data";
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
    return res.status(200).json({ product });
  } catch (error) {
    return res.status(400).send(error);
  }
};

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductMD.find({});
    if (products) {
      return res.status(200).json({ products });
    }
  } catch (error) {
    return res.status(400).send("data not found");
  }
};

export const getProductID = async (req: Request, res: Response) => {
  const id = req.params.id;
  try {
    const data = await ProductMD.findById({ _id: id });
    return res.status(201).json({ status: "successfuly", data });
  } catch (error: any) {
    return res.status(401).send(error.message);
  }
};

export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const { title, description, product_Type, category, tag, rating, price } = <
      Update
    >req.body;
    const file = req.files as [Express.Multer.File];

    const product = await ProductMD.findByIdAndUpdate(
      { _id: id },
      {
        title: title,
        description: description,
        product_Type: product_Type,
        category: category,
        tag: tag,
        rating: rating,
        image: file[0].filename,
        price: price,
      }
    );
    return res.status(200).json({ message: "update done" });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};

export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await ProductMD.findOneAndDelete({ _id: id });
    return res.status(200).json({ message: "delete done" });
  } catch (error: any) {
    return res.status(401).json({ message: error.message });
  }
};
