import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';

import { Company } from '../companies/companies.schema';
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @ApiProperty({
    example: 'Silver Dragon Station Chain Bracelet',
    description: 'Product title',
  })
  @Prop()
  title: string;

  @ApiProperty({
    example: 49,
    description: 'Product price',
  })
  @Prop()
  price: number;

  @ApiProperty({
    example:
      'Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her',
    description: 'Product description',
  })
  @Prop()
  description: string;

  @ApiProperty({
    example: 'jewelery',
    description: 'Product category',
  })
  @Prop()
  category: string;

  @ApiProperty({
    example: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    description: 'Product image',
  })
  @Prop()
  image: string;

  @ApiProperty({
    example: 2,
    description: 'Product quantity',
  })
  @Prop({ required: false })
  quantity: number;

  @ApiProperty({
    example: '646e0d1395b481438b60b8c8',
    description: 'Company id',
  })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Company' })
  company: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
