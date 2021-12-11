import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersModule } from './orders/orders.module';
import {SequelizeModule} from "@nestjs/sequelize";
import {join} from "path";
import {Order} from "./orders/entities/order.entity";

@Module({
  imports: [OrdersModule, SequelizeModule.forRoot({
    dialect: "sqlite",
    host: join(__dirname, "database.sqlite"),
    autoLoadModels: true,
    models: [Order]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
