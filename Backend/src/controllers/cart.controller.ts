import express from "express";
import { Request, Response } from "express";
import { Product } from "../entities/Product";
import { Cart } from "../entities/Cart";
import { datasource } from "../index";

const saveProductToCart = async (req: Request, res: Response) => {
  const { cartId, productId } = req.body;

  const cart1 = await datasource
    .getRepository(Cart)
    .createQueryBuilder("cart")
    .where("cart.id = :cartId", {
      cartId: cartId,
    })
    .getOne();

  const product = await datasource
    .getRepository(Product)
    .createQueryBuilder("products")
    .where("products.id = :productId", {
      productId: productId,
    })
    .getOne();

  try {
    const cart = new Cart();
    if (product != null) {
      cart.products = [product];
    }
    return res.json(await cart.save());
  } catch (err) {
    console.error("Error while trying to save the user!!");
    return res.status(500).json(err);
  }
};

module.exports = {
  saveProductToCart,
};
