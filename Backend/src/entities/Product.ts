import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: true })
  productType: string;

  @Column({ nullable: true })
  price: number;

  @Column({ unique: true })
  productName: string;

  @Column({ unique: true })
  image: string;
}
