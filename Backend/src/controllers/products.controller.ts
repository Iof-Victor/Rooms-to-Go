import express from "express";
import { Request, Response } from "express";
import { Product } from "../entities/Product";

import { datasource } from "../index";

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

const getAllProducts = async (req: Request, res: Response) => {
  // will get the products in relation with the pagination and with the type of the product
  try {
    const { productType, nrOfProducts, pageNumber } = req.query;

    let products;
    const skipedProducts = (Number(pageNumber) - 1) * Number(nrOfProducts);
    if (productType) {
      products = await datasource
        .getRepository(Product)
        .createQueryBuilder("product")
        .where("product.productType = :productType", {
          productType: productType,
        })
        .skip(skipedProducts)
        .take(Number(nrOfProducts))
        .getMany();
    } else {
      products = await datasource
        .getRepository(Product)
        .createQueryBuilder("product")
        .skip(skipedProducts)
        .take(Number(nrOfProducts))
        .getMany();
    }

    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Ahh...Something went wrong" });
  }
};

const getAllInStockProducts = async (req: Request, res: Response) => {
  // will get the products in relation with the pagination and that are currently in stock
  try {
    const { nrOfProducts, pageNumber } = req.query;
    let products;
    const skipedProducts = (Number(pageNumber) - 1) * Number(nrOfProducts);
    products = await datasource
      .getRepository(Product)
      .createQueryBuilder("product")
      .where("product.quantity > :quantity", {
        quantity: 0,
      })
      .skip(skipedProducts)
      .take(Number(nrOfProducts))
      .getMany();
    return res.status(200).json(products);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ error: "Ahh...Something went wrong" });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getAllInStockProducts,
};
