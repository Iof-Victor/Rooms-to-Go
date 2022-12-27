import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";

import { Cart } from "./Cart";
import { Product } from "./Product";

@Entity()
export class CartProduct extends BaseEntity {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  cartId: number;

  @ManyToOne(() => Product, (product) => product.cartConnect)
  @JoinColumn({ name: "productId" })
  product: Promise<Product>;

  @ManyToOne(() => Cart, (cart) => cart.productConnect)
  @JoinColumn({ name: "cartId" })
  cart: Promise<Cart>;

  @Column({ unique: false })
  quantity: number;
}
