import { HttpException, Injectable, NotFoundException } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Order } from './orders.schema';
import { OrderDTO } from './orders.dto';

@Injectable()
export class OrdersService {
  constructor(@InjectModel(Order.name) private orderModel: Model<Order>) {}

  async getCustomerOrders({ email, phone }: { email: string; phone: string }) {
    try {
      const customerOrders = await this.orderModel.find({ email, phone });

      if (!customerOrders)
        throw new NotFoundException(
          'We dont find orders history for this user',
        );

      return customerOrders;
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }

  async makeOrder(order: OrderDTO): Promise<Order> {
    try {
      const createOrderInDB = await this.orderModel.create(order);

      return createOrderInDB;
    } catch (error) {
      throw new HttpException(error, error.status);
    }
  }
}
