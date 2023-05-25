import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';

import { OrdersService } from './orders.service';

import { Order } from './orders.schema';

import { OrderDTO, findQuery } from './orders.dto';

import {
  API,
  ENDPOINTS,
  ERROR_MESSAGES,
  EXAMPLES,
} from 'src/helpers/constants/constants';

const {
  ISE,
  INVALID_PHONE,
  INVALID_EMAIL,
  ORDERS_HISTORY_NOT_FOUND,
  PHONE_EMAIL_PROBLEM,
  ORDERS_MAKE_ORDER_BAD_REQUEST,
} = ERROR_MESSAGES;

const {
  OPERATION_GET_CUSTOMER_ORDERS,
  TAG_ORDERS,
  OPERATION_POST_CUSTOMER_ORDER,
} = API;

const { API_ORDERS } = ENDPOINTS;

const { CUSTOMER_PHONE, CUSTOMER_EMAIL } = EXAMPLES;

@ApiTags(TAG_ORDERS)
@Controller(API_ORDERS)
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @ApiOperation({ summary: OPERATION_GET_CUSTOMER_ORDERS })
  @ApiOkResponse({ type: [Order] })
  @ApiQuery({
    name: 'phone',
    type: 'string',
    description: INVALID_PHONE,
    example: CUSTOMER_PHONE,
    required: true,
  })
  @ApiQuery({
    name: 'email',
    type: 'string',
    description: INVALID_EMAIL,
    example: CUSTOMER_EMAIL,
    required: true,
  })
  @ApiBadRequestResponse({ description: PHONE_EMAIL_PROBLEM })
  @ApiNotFoundResponse({ description: ORDERS_HISTORY_NOT_FOUND })
  @ApiInternalServerErrorResponse({ description: ISE })
  @Get()
  async getCustomerOrders(@Query() queries: findQuery): Promise<Order[]> {
    const customerOrders = await this.orderService.getCustomerOrders(queries);

    return customerOrders;
  }

  @ApiOperation({ summary: OPERATION_POST_CUSTOMER_ORDER })
  @ApiCreatedResponse({ type: Order })
  @ApiBadRequestResponse({ description: ORDERS_MAKE_ORDER_BAD_REQUEST })
  @ApiInternalServerErrorResponse({ description: ISE })
  @Post()
  async makeOrder(@Body() order: OrderDTO): Promise<Order> {
    const createdUser = await this.orderService.makeOrder(order);

    return createdUser;
  }
}
