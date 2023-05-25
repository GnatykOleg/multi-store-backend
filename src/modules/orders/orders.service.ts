import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { Order } from './orders.schema';

import { OrderDTO } from './orders.dto';

import { ERROR_MESSAGES } from 'src/helpers/constants/constants';

const { ORDERS_HISTORY_NOT_FOUND } = ERROR_MESSAGES;

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getCustomerOrders({ email, phone }: { email: string; phone: string }) {
    try {
      const customerOrders = await this.orderModel.find({ email, phone });

      if (customerOrders.length === 0)
        throw new NotFoundException(ORDERS_HISTORY_NOT_FOUND);

      return customerOrders;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  async makeOrder(order: OrderDTO): Promise<Order> {
    try {
      const createOrderInDB = await this.orderModel.create(order);

      return createOrderInDB;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
