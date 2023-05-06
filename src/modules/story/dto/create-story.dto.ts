import { ApiProperty } from '@nestjs/swagger';
import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateStoryDto {
  @ApiProperty({ type: String, example: 'Story Name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String, example: 'Story Description' })
  @IsNotEmpty()
  @IsString()
  description: string;

  @ApiProperty({ type: String, example: 'https://story.com/thumbnail.png' })
  @IsNotEmpty()
  @IsString()
  thumbnail: string;

  @ApiProperty({ type: String, example: 'https://story.com/video.mp4' })
  @IsNotEmpty()
  @IsString()
  video: string;

  @ApiProperty({
    type: String,
    format: 'uuid',
    example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  })
  @IsNotEmpty()
  @IsUUID()
  orgId: string;

  @ApiProperty({
    type: String,
    format: 'uuid',
    example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  })
  @IsNotEmpty()
  @IsUUID()
  currencyId: string;

  @ApiProperty({ type: Number, example: 100000 })
  @IsNotEmpty()
  @IsNumber()
  minDonate: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNotEmpty()
  @IsNumber()
  amountDonate: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNotEmpty()
  @IsNumber()
  rateDonate: number;

  @ApiProperty({ type: Number, example: 0 })
  @IsNotEmpty()
  @IsNumber()
  totalDonate: number;

  @ApiProperty({ type: Date, example: '2021-01-01T00:00:00.000Z' })
  @IsNotEmpty()
  @IsDateString()
  expiredAt: Date;
}
