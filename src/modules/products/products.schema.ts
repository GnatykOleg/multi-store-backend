import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import mongoose, { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

import { API, EXAMPLES } from 'src/helpers/constants/constants';

export type ProductDocument = HydratedDocument<Product>;

const {
  MONGO_ID,
  PRODUCT_CATEGORY,
  PRODUCT_DESCRIPTION,
  PRODUCT_IMG_LINK,
  PRODUCT_PRICE,
  PRODUCT_TITLE,
  PRODUCT_QUANTITY,
} = EXAMPLES;

const { TAG_COMPANY } = API;

@Schema()
export class Product {
  @ApiProperty({ example: MONGO_ID })
  _id: string;

  @ApiProperty({ example: PRODUCT_TITLE })
  @Prop()
  title: string;

  @ApiProperty({ example: PRODUCT_PRICE })
  @Prop()
  price: number;

  @ApiProperty({ example: PRODUCT_DESCRIPTION })
  @Prop()
  description: string;

  @ApiProperty({ example: PRODUCT_CATEGORY })
  @Prop()
  category: string;

  @ApiProperty({ example: PRODUCT_IMG_LINK })
  @Prop()
  image: string;

  @ApiProperty({ example: PRODUCT_QUANTITY })
  @Prop({ required: false })
  quantity: number;

  @ApiProperty({ example: MONGO_ID })
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: TAG_COMPANY })
  company_id: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
