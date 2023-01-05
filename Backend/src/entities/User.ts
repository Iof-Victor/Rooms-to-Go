import {
  Entity,
  BaseEntity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
} from "typeorm";
import { IsEmail, Length } from "class-validator";
import { Cart } from "./Cart";

@Entity("users")
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: number;

  @Column({ nullable: true })
  firstName: string;

  @Column({ nullable: true })
  lastName: string;

  @Length(3, 16, { message: "Must be at least 3 characters long" })
  @Column({ unique: true })
  username: string;

  @IsEmail(undefined, { message: "Must be a valid email" })
  @Length(1, 255, { message: "Must not be empty" })
  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: false,
  })
  password: string;

  @Column({ nullable: true })
  phoneNumber: string;

  @Column({ nullable: true })
  address: string;
  cartId: any;
}
