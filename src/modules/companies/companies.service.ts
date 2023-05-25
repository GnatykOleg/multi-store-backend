import { HttpException, Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Company } from './companies.schema';

@Injectable()
export class CompaniesService {
  constructor(
    @InjectModel(Company.name) private companyModel: Model<Company>,
  ) {}

  async getAllCompanies(): Promise<Company[]> {
    try {
      const companies = await this.companyModel.find().exec();

      return companies;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
