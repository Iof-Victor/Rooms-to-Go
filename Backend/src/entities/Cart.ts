import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity("cart")
export class Cart extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @OneToOne(() => User, (user) => user)
  @JoinColumn()
  user: User;

  @ManyToMany(() => Product)
  @JoinTable()
  products: Product[];
}
