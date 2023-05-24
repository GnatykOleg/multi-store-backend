import { HttpException, Injectable } from '@nestjs/common';
import { Product } from './products.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}

  async getCompanyProducts(companyId: string): Promise<Product[]> {
    try {
      const productForCompany = await this.productModel.find({
        company: companyId,
      });

      return productForCompany;
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
