import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @ApiProperty({
    example: 'Microsoft',
    description: 'Company name',
  })
  @Prop()
  company_name: string;

  @ApiProperty({
    example:
      'https://res.cloudinary.com/dihwu7ikh/image/upload/v1684927602/multi-store-companies/womens-clothes_wxjxmb.jpg',
    description: 'Company logo',
  })
  @Prop()
  logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
