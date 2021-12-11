import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import {Order} from "./entities/order.entity";
import {InjectModel} from "@nestjs/sequelize";
import {AccountStorageService} from "../accounts/account-storage/account-storage.service";
import {EmptyResultError} from "sequelize";

@Injectable()
export class OrdersService {

  constructor(
      @InjectModel(Order)
      private orderModel: typeof Order,
      private accountStorage: AccountStorageService
  ) {}

  create(createOrderDto: CreateOrderDto) {
    return this.orderModel.create({
      ...createOrderDto,
      account_id: this.accountStorage.account.id
    });
  }

  findAll() {
    return this.orderModel.findAll({
      where: {
        account_id: this.accountStorage.account.id
      }
    });
  }

  findOne(id: string) {
    return this.orderModel.findOne({
      where: {
        id,
        account_id: this.accountStorage.account.id
      },
      rejectOnEmpty: new EmptyResultError(`Order with ID ${id} not found`)
    });
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
