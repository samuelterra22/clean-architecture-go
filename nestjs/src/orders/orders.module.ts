import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {Order} from "./entities/order.entity";
import {AccountsModule} from "../accounts/accounts.module";

@Module({
  imports: [SequelizeModule.forFeature([Order]), AccountsModule],
  controllers: [OrdersController],
  providers: [OrdersService]
})
export class OrdersModule {}
