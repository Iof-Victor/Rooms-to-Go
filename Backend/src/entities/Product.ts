import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
} from "typeorm";
import { Cart } from "./Cart";

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

  @ManyToMany(() => Cart)
  carts: Cart[];
}
