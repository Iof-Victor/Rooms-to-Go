import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("products")
export class Product extends BaseEntity {
  @PrimaryColumn()
  id: number;

  @Column({ nullable: false })
  productType: string;

  @Column({ nullable: false })
  price: number;

  @Column({ unique: true })
  productName: string;

  @Column({ nullable: true })
  image: string;
}
