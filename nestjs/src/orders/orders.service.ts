import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {Order} from "./entities/order.entity";
import {InjectModel} from "@nestjs/sequelize";
import {threadId} from "worker_threads";

@Injectable()
export class OrdersService {

  constructor(
      @InjectModel(Order)
      private orderModel: typeof Order) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create(createOrderDto);
  }

  findAll() {
    return this.orderModel.findAll();
  }

  findOne(id: string) {
    return this.orderModel.findByPk(id);
  }

  async update(id: string, updateOrderDto: UpdateOrderDto) {
    const order = await this.findOne(id)
    return order.update(updateOrderDto)
  }

  async remove(id: string) {
    const order = await this.findOne(id)
    return order.destroy()
  }
}
