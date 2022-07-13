import mongoose, { Schema, Document } from "mongoose";
import { TypeProduct, Category } from "../Data";

interface ProductDoc extends Document {
  title: string;
  description: string;
  product_Type: TypeProduct;
  category: Category;
  tag: [string];
  rating: number;
  image: [string];
  price: number;
}

const ProductSchema = new Schema<ProductDoc>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  product_Type: {
    type: String,
    enum: ["shampoing", "creme", "gel", "maquillage", "soin"],
    required: true,
  },
  category: {
    type: String,
    enum: ["homme", "femme", "bebe", "soin"],
    required: true,
  },
  tag: {
    type: [String],
  },
  rating: {
    type: Number,
  },
  image: {
    type: [String],
  },
  price: {
    type: Number,
    required: true,
  },
});

export const ProductMD = mongoose.model<ProductDoc>("product", ProductSchema);
