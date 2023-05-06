import { Module } from '@nestjs/common';
import { StoryService } from './story.service';
import { StoryController } from './story.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoryEntity } from 'src/modules/story/entities/story.entity';
import { OrgEntity } from 'src/modules/org/entities/org.entity';
import { CurrencyEntity } from 'src/modules/currency/entities/currency.entity';
import { DonateEntity } from 'src/modules/donate/entities/donate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoryEntity, OrgEntity, CurrencyEntity])],
  controllers: [StoryController],
  providers: [StoryService],
})
export class StoryModule {}
