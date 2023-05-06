import { Injectable } from '@nestjs/common';
import { CreateDonateDto } from './dto/create-donate.dto';
import { DonateEntity } from 'src/modules/donate/entities/donate.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { plainToInstance } from 'class-transformer';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { STORY_STATUS } from 'src/modules/story/enums/story.enum';

@Injectable()
export class DonateService {
  constructor(
    @InjectRepository(DonateEntity)
    private readonly donateRepository: Repository<DonateEntity>,
    @InjectRepository(StoryEntity)
    private readonly storyRepository: Repository<StoryEntity>,
  ) {}

  async create(createDonateDto: CreateDonateDto) {
    const donateInstance = plainToInstance(DonateEntity, createDonateDto);

    const story = await this.storyRepository.findOne({
      where: { id: createDonateDto.storyId },
    });

    if (!story) {
      throw new Error('Story not found');
    }

    if (story.status === STORY_STATUS.CLOSED) {
      throw new Error('Story closed');
    }

    if (story.status === 'PENDING') {
      throw new Error('Story pending');
    }

    if (story.expiredAt < new Date()) {
      await this.storyRepository.update(story.id, {
        status: STORY_STATUS.CLOSED,
      });

      throw new Error('Story expired');
    }

    await this.donateRepository.save(donateInstance);

    await this.updateTotalDonate(createDonateDto.storyId);

    return 'Order created successfully';
  }

  findAllByStoryId(storyId: string) {
    return this.donateRepository
      .createQueryBuilder('donate')
      .where('storyId = :storyId', { storyId })
      .getMany();
  }

  findOne(id: string) {
    return this.donateRepository.findOne({
      where: { id },
    });
  }

  remove(id: string) {
    return this.donateRepository
      .createQueryBuilder('donate')
      .delete()
      .where('id = :id', { id })
      .execute();
  }

  async updateTotalDonate(id: string) {
    const donates = await this.donateRepository.sum('amount', {
      storyId: id,
    });

    const story = await this.storyRepository.findOne({
      where: { id },
    });

    const rateDonate = (donates / story.minDonate) * 100;

    return this.storyRepository.update(id, {
      totalDonate: donates,
      rateDonate,
    });
  }
}
