import { Entity, BaseEntity, Column, PrimaryColumn } from "typeorm";

@Entity("orders")
export class Order extends BaseEntity {}
