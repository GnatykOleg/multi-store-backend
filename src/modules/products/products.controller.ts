import { Controller, Get, Param } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

import { ProductsService } from './products.service';

import { Product } from './products.schema';

import { IdParamDto } from './products.dto';

import {
  ENDPOINTS,
  ERROR_MESSAGES,
  EXAMPLES,
  API,
} from 'src/helpers/constants/constants';

const { INVALID_ID, COMPANY_PRODUCTS_NOT_FOUND, ISE } = ERROR_MESSAGES;

const { API_PRODUCTS } = ENDPOINTS;

const { TAG_PRODUCTS, OPERATION_GET_PRODUCTS_BY_ID } = API;

const { MONGO_ID } = EXAMPLES;

@ApiTags(TAG_PRODUCTS)
@Controller(API_PRODUCTS)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @ApiOperation({ summary: OPERATION_GET_PRODUCTS_BY_ID })
  @ApiParam({ name: 'id', type: 'string', example: MONGO_ID })
  @ApiOkResponse({ type: [Product] })
  @ApiBadRequestResponse({ description: INVALID_ID })
  @ApiNotFoundResponse({ description: COMPANY_PRODUCTS_NOT_FOUND })
  @ApiInternalServerErrorResponse({ description: ISE })
  @Get(':id')
  async getCompanyProducts(@Param() param: IdParamDto): Promise<Product[]> {
    const { id } = param;

    const productForCompany = await this.productsService.getCompanyProducts(id);

    return productForCompany;
  }
}
