import { Body, Controller, Get, Post, Query } from '@nestjs/common';

import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { OrdersService } from './orders.service';
import { Order } from './orders.schema';
import { OrderDTO, findQuery } from './orders.dto';

@ApiTags('Orders')
@Controller('api/orders')
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @ApiOperation({ summary: 'Get customer orders history' })
  @ApiResponse({ status: 200, type: [Order] })
  @ApiQuery({
    name: 'phone',
    type: 'string',
    description: 'The phone number must be 12 digits, without the "+" symbol.',
    example: '380597643354',
  })
  @ApiQuery({
    name: 'email',
    type: 'string',
    description: 'Email address',
    example: 'john@mail.com',
  })
  @Get()
  async getCustomerOrders(@Query() queries: findQuery): Promise<Order[]> {
    const customerOrders = await this.orderService.getCustomerOrders(queries);

    return customerOrders;
  }

  @ApiOperation({ summary: 'Make order' })
  @ApiResponse({ status: 201, type: Order })
  @Post()
  async makeOrder(@Body() order: OrderDTO): Promise<Order> {
    const createdUser = await this.orderService.makeOrder(order);
    return createdUser;
  }
}
