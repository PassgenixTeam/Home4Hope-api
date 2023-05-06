import { Injectable } from '@nestjs/common';
import { CreateCurrencyDto } from './dto/create-currency.dto';
import { UpdateCurrencyDto } from './dto/update-currency.dto';
import { CurrencyEntity } from 'src/modules/currency/entities/currency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { removeKeyUndefined } from '@app/common';

@Injectable()
export class CurrencyService {
  constructor(
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  create(createCurrencyDto: CreateCurrencyDto) {
    const currencyInstance = plainToInstance(CurrencyEntity, createCurrencyDto);
    return this.currencyRepository.save(currencyInstance);
  }

  findAll() {
    return this.currencyRepository.find();
  }

  update(id: string, updateCurrencyDto: UpdateCurrencyDto) {
    const currencyInstance = plainToInstance(CurrencyEntity, updateCurrencyDto);
    removeKeyUndefined(currencyInstance);
    return this.currencyRepository.update(id, currencyInstance);
  }

  remove(id: string) {
    return this.currencyRepository.delete(id);
  }
}
