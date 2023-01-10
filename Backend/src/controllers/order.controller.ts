import { CartProduct } from "../entities/CartProduct";
import express from "express";
import { Request, Response } from "express";

const addToCart = async (req: Request, res: Response) => {
  const { productId, cartId } = req.body;

  try {
    let productAlreadyCart = await CartProduct.findOne({
      where: { productId: productId },
    }); //try to see if we can find one

    let productInCart;
    if (!productAlreadyCart) {
      // if not then we add it first to the table
      productInCart = CartProduct.create({
        productId: productId,
        cartId: cartId,
        quantity: 1,
      });
    } else {
      //if the product is already in the table then we increase the count
      productInCart = CartProduct.create({
        productId: productId,
        cartId: cartId,
        quantity: productAlreadyCart.quantity + 1,
      });
    }

    return res.json(await productInCart.save());
  } catch (err) {
    console.error("Error while trying to save the user!!");
    return res.status(500).json(err);
  }
};

const deleteProductFromCart = async (req: Request, res: Response) => {};

module.exports = {
  addToCart,
  deleteProductFromCart,
};
