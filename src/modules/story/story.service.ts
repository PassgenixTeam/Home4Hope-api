import { Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { plainToInstance } from 'class-transformer';
import { OrgEntity } from 'src/modules/org/entities/org.entity';
import { CurrencyEntity } from 'src/modules/currency/entities/currency.entity';
import { removeKeyUndefined } from '@app/common';
import { STORY_STATUS } from 'src/modules/story/enums/story.enum';
import { DonateEntity } from 'src/modules/donate/entities/donate.entity';

@Injectable()
export class StoryService {
  constructor(
    @InjectRepository(StoryEntity)
    private readonly storyRepository: Repository<StoryEntity>,
    @InjectRepository(OrgEntity)
    private readonly orgRepository: Repository<OrgEntity>,
    @InjectRepository(CurrencyEntity)
    private readonly currencyRepository: Repository<CurrencyEntity>,
  ) {}

  async create(createStoryDto: CreateStoryDto) {
    const storyInstance = plainToInstance(StoryEntity, createStoryDto);

    const org = await this.orgRepository.findOne({
      where: { id: createStoryDto.orgId },
    });

    if (!org) {
      throw new Error('Org not found');
    }

    const currency = await this.currencyRepository.findOne({
      where: { id: createStoryDto.currencyId },
    });

    if (!currency) {
      throw new Error('Currency not found');
    }

    storyInstance.status = STORY_STATUS.PENDING;

    return this.storyRepository.save(storyInstance);
  }

  findAll() {
    return this.storyRepository.find();
  }

  findOne(id: number) {
    return this.storyRepository
      .createQueryBuilder('story')
      .leftJoinAndSelect('story.org', 'org')
      .leftJoinAndSelect('story.currency', 'currency')
      .where('id = :id', { id })
      .getOne();
  }

  async update(id: number, updateStoryDto: UpdateStoryDto) {
    const storyInstance = plainToInstance(StoryEntity, updateStoryDto);

    if (storyInstance.orgId) {
      const org = await this.orgRepository.findOne({
        where: { id: storyInstance.orgId },
      });

      if (!org) {
        throw new Error('Org not found');
      }
    }

    if (storyInstance.currencyId) {
      const currency = await this.currencyRepository.findOne({
        where: { id: storyInstance.currencyId },
      });

      if (!currency) {
        throw new Error('Currency not found');
      }
    }

    removeKeyUndefined(storyInstance);

    return this.storyRepository.update(id, storyInstance);
  }

  remove(id: number) {
    return this.storyRepository.delete(id);
  }
}
