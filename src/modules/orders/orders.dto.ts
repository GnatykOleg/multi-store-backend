import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  IsNumber,
  IsArray,
  ArrayNotEmpty,
} from 'class-validator';

import { Product } from '../products/products.schema';

export class OrderDTO {
  @ApiProperty({ example: 'John', description: 'Customer name' })
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @ApiProperty({ example: 'john@mail.com', description: 'Customer email' })
  @IsEmail()
  @IsNotEmpty()
  readonly email: string;

  @ApiProperty({
    example: '380459996658',
    description: 'Customer phone for Ukraine without +',
  })
  @Matches(/^380\d{9}$/, {
    message: 'The phone number must be 12 digits, without the "+" symbol.',
  })
  readonly phone: string;

  @ApiProperty({
    example: 'Vasilkovskaya 67',
    description: 'Customer delivery adress',
  })
  @IsString()
  @IsNotEmpty()
  readonly adress: string;

  @ApiProperty({
    example: 590,
    description: 'Total order price',
  })
  @IsNumber()
  @IsNotEmpty()
  readonly total_price: number;

  @ApiProperty({
    example: 'Test',
    description: 'As Array of orders',
    type: [Product],
  })
  @IsArray()
  @ArrayNotEmpty()
  readonly orders: Array<Product>;
}

export class findQuery {
  @Matches(/^380\d{9}$/, {
    message: 'The phone number must be 12 digits, without the "+" symbol.',
  })
  @IsNotEmpty()
  readonly phone: string;

  @IsEmail()
  @IsNotEmpty()
  readonly email: string;
}
