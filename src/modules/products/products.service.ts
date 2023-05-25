import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Product } from './products.schema';

import { ERROR_MESSAGES } from 'src/helpers/constants/constants';

const { COMPANY_PRODUCTS_NOT_FOUND } = ERROR_MESSAGES;

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getCompanyProducts(company_id: string): Promise<Product[]> {
    try {
      const productForCompany = await this.productModel.find({ company_id });

      if (productForCompany.length === 0)
        throw new NotFoundException(COMPANY_PRODUCTS_NOT_FOUND);

      return productForCompany;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
