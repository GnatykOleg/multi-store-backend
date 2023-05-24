import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

import { Product, ProductSchema } from '../products/products.schema';

export type OrderDocument = HydratedDocument<Order>;

@Schema({ timestamps: true, versionKey: false })
export class Order {
  @ApiProperty({ example: 'John', description: 'Customer name' })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ example: 'john@mail.com', description: 'Customer email' })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: '380459996658', description: 'Customer phone' })
  @Prop({ required: true })
  phone: string;

  @ApiProperty({
    example: 'Vasilkovskaya 67',
    description: 'Customer delivery adress',
  })
  @Prop({ required: true })
  adress: string;

  @ApiProperty({
    example: 590,
    description: 'Total order price',
  })
  @Prop({ required: true })
  total_price: number;

  @ApiProperty({
    example: Product,
    description: 'As array of orders',
    type: [Product],
  })
  @Prop({ required: true, type: [ProductSchema] })
  orders: Array<Product>;
}

export const OrderSchema = SchemaFactory.createForClass(Order);

//  {
