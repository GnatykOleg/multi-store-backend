import { Controller, Get, Param } from '@nestjs/common';

import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

import { ProductsService } from './products.service';

import { Product } from './products.schema';

@ApiTags('Products')
@Controller('api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: 'Get product of the company' })
  @ApiParam({ name: 'id', type: 'string', example: '646e0d1395b481438b60b8c8' })
  @Get(':id')
  async getCompanyProducts(@Param('id') id: string): Promise<Product[]> {
    const productForCompany = await this.productsService.getCompanyProducts(id);

    return productForCompany;
  }
}
