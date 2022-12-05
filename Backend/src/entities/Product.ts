import { Entity, BaseEntity, Column, PrimaryGeneratedColumn } from "typeorm";

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
}
