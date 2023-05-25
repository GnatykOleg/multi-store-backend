import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

import { ApiProperty } from '@nestjs/swagger';

import { EXAMPLES } from 'src/helpers/constants/constants';

export type CompanyDocument = HydratedDocument<Company>;

const { COMPANY_IMG_LINK, COMPANY_TITLE, MONGO_ID } = EXAMPLES;

@Schema()
export class Company {
  @ApiProperty({ example: MONGO_ID })
  _id: string;

  @ApiProperty({ example: COMPANY_TITLE })
  @Prop()
  company_name: string;

  @ApiProperty({ example: COMPANY_IMG_LINK })
  @Prop()
  logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
