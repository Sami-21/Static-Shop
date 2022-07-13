export enum TypeProduct {
  shampoing_type = "shampoing",
  creme_type = "creme",
  gel_type = "gel",
  maquillage_type = "maquillage",
  deodorant_type = "deodorant",
}

export enum Category {
  homme_ctg = "homme",
  femme_ctg = "femme",
  bebe_ctg = "bebe",
  soin_ctg = "soin",
}

export interface CreateProduct {
  title: string;
  description: string;
  product_Type: TypeProduct;
  category: Category;
  tag: [string];
  rating: number;
  image: [string];
  price: number;
}

export interface Update{
  title: string;
  description: string;
  product_Type: TypeProduct;
  category: Category;
  tag: [string];
  rating: number;
  image: [string];
  price: number;
}