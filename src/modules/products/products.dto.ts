import { ApiProperty } from '@nestjs/swagger';

import { IsNotEmpty, IsString, IsNumber, IsMongoId } from 'class-validator';

import { EXAMPLES } from 'src/helpers/constants/constants';

const {
  MONGO_ID,
  PRODUCT_CATEGORY,
  PRODUCT_DESCRIPTION,
  PRODUCT_IMG_LINK,
  PRODUCT_PRICE,
  PRODUCT_TITLE,
  PRODUCT_QUANTITY,
} = EXAMPLES;

export class IdParamDto {
  @IsMongoId()
  readonly id: string;
}

export class ProductDTO {
  @ApiProperty({ example: MONGO_ID })
  @IsNotEmpty()
  @IsMongoId()
  readonly _id: string;

  @ApiProperty({ example: PRODUCT_TITLE })
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({ example: PRODUCT_PRICE })
  @IsNumber()
  @IsNotEmpty()
  readonly price: number;

  @ApiProperty({ example: PRODUCT_DESCRIPTION })
  @IsString()
  @IsNotEmpty()
  readonly description: string;

  @ApiProperty({ example: PRODUCT_CATEGORY })
  @IsString()
  @IsNotEmpty()
  readonly category: string;

  @ApiProperty({ example: PRODUCT_IMG_LINK })
  @IsString()
  @IsNotEmpty()
  readonly image: string;

  @ApiProperty({ example: PRODUCT_QUANTITY })
  @IsNumber()
  @IsNotEmpty()
  readonly quantity: number;

  @ApiProperty({ example: MONGO_ID })
  @IsNotEmpty()
  @IsMongoId()
  readonly company_id: string;
}
