import express from "express";
import { Request, Response } from "express";
import { Product } from "../entities/Product";

const createProduct = async (req: Request, res: Response) => {
  const { productType, price, productName, quantity, image } = req.body;

  let errors: any = {};

  if (!productType) errors.name = " Type must not be empty";
  if (!productName) errors.description = "Product name must not be empty";
  if (!price) errors.status = "Price must not be empty";
  if (!quantity) errors.status = "Quantity must not be empty";

  if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  try {
    const product = Product.create({
      productType: productType,
      productName: productName,
      price: price,
      quantity: quantity,
      image: "",
    });
    return res.json(await product.save());
  } catch (err) {
    console.error("Error while trying to save the user!!");
    return res.status(500).json(err);
  }
};

module.exports = {
  createProduct,
};
