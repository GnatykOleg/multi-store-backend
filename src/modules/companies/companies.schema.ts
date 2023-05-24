import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop()
  company_name: string;

  @Prop()
  logo: string;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
