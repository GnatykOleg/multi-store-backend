import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

import { Product, ProductSchema } from '../products/products.schema';

import { EXAMPLES } from 'src/helpers/constants/constants';

export type OrderDocument = HydratedDocument<Order>;

const {
  MONGO_ID,
  CUSTOMER_EMAIL,
  CUSTOMER_NAME,
  CUSTOMER_PHONE,
  CUSTOMER_ADRESS,
  ORDER_TOTAL_PRICE,
  ORDER_CREATED_AT,
  ORDER_UPDATED_AT,
} = EXAMPLES;

@Schema({ timestamps: true, versionKey: false })
export class Order {
  @ApiProperty({ example: MONGO_ID })
  _id: string;

  @ApiProperty({ example: CUSTOMER_NAME })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: CUSTOMER_EMAIL })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: CUSTOMER_PHONE })
  @Prop({ required: true })
  phone: string;

  @ApiProperty({ example: CUSTOMER_ADRESS })
  @Prop({ required: true })
  adress: string;

  @ApiProperty({ example: ORDER_TOTAL_PRICE })
  @Prop({ required: true })
  total_price: number;

  @ApiProperty({ example: ORDER_CREATED_AT })
  createdAt: Date;

  @ApiProperty({ example: ORDER_UPDATED_AT })
  updatedAt: Date;

  @ApiProperty({ example: Product, type: [Product] })
  @Prop({ required: true, type: [ProductSchema] })
  orders: Array<Product>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
