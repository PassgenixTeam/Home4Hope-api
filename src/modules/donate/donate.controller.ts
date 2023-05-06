import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { DonateService } from './donate.service';
import { CreateDonateDto } from './dto/create-donate.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Donate')
@Controller('donate')
export class DonateController {
  constructor(private readonly donateService: DonateService) {}

  @Post()
  create(@Body() createDonateDto: CreateDonateDto) {
    return this.donateService.create(createDonateDto);
  }

  @Get('story/:id')
  findAllByStoryId(@Param('id') storyId: string) {
    return this.donateService.findAllByStoryId(storyId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.donateService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.donateService.remove(id);
  }
}
