import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import {Account} from "./entities/account.entity";
import {InjectModel} from "@nestjs/sequelize";

@Injectable()
export class AccountsService {
  constructor(
      @InjectModel(Account)
      private accountModel: typeof Account
  ) {}

  create(createAccountDto: CreateAccountDto) {
    return this.accountModel.create(createAccountDto);
  }

  findAll() {
    return this.accountModel.findAll();
  }

  findOne(id: string) {
    return this.accountModel.findByPk(id);
  }

  async update(id: string, updateAccountDto: UpdateAccountDto) {
    const account = await this.findOne(id)
    return account.update(updateAccountDto);
  }

  async remove(id: string) {
    const account = await this.findOne(id)
    return account.destroy();
  }
}
