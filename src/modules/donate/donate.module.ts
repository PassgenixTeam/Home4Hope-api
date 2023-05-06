import { Module } from '@nestjs/common';
import { DonateService } from './donate.service';
import { DonateController } from './donate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DonateEntity } from 'src/modules/donate/entities/donate.entity';
import { StoryEntity } from 'src/modules/story/entities/story.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DonateEntity, StoryEntity])],
  controllers: [DonateController],
  providers: [DonateService],
})
export class DonateModule {}
