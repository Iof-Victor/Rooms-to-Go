import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  OneToMany,
} from "typeorm";
import { Cart } from "./Cart";
import { CartProduct } from "./CartProduct";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  productType: string;

  @Column({ nullable: false })
  price: string;

  @Column({ unique: true })
  productName: string;

  @Column({ unique: false })
  quantity: number;

  @Column({ nullable: true })
  image: string;

  @OneToMany(() => CartProduct, (cp) => cp.product)
  cartConnect: Promise<CartProduct[]>;
}
