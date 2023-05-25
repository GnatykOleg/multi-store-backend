import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
  ValidateNested,
} from 'class-validator';

import { Type } from 'class-transformer';

import { Product } from '../products/products.schema';

import { ProductDTO } from '../products/products.dto';

import { ERROR_MESSAGES, EXAMPLES } from 'src/helpers/constants/constants';

const {
  CUSTOMER_NAME,
  CUSTOMER_EMAIL,
  CUSTOMER_PHONE,
  CUSTOMER_ADRESS,
  ORDER_TOTAL_PRICE,
} = EXAMPLES;

const { INVALID_PHONE } = ERROR_MESSAGES;

export class OrderDTO {
  @ApiProperty({ example: CUSTOMER_NAME })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: CUSTOMER_EMAIL })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({ example: CUSTOMER_PHONE })
  @Matches(/^380\d{9}$/, { message: INVALID_PHONE })
  readonly phone: string;

  @ApiProperty({ example: CUSTOMER_ADRESS })
  @IsString()
  @IsNotEmpty()
  readonly adress: string;

  @ApiProperty({ example: ORDER_TOTAL_PRICE })
  @IsNumber()
  @IsNotEmpty()
  readonly total_price: number;

  @ApiProperty({ example: Product, type: [Product] })
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductDTO)
  readonly orders: ProductDTO[];
}

export class findQuery {
  @Matches(/^380\d{9}$/, { message: INVALID_PHONE })
  @IsNotEmpty()
  readonly phone: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
