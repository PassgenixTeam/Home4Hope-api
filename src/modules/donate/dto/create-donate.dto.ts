import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateDonateDto {
  @ApiProperty({ type: String, example: 'Donate Name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String, example: 'donate@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, example: '123456789' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ type: Number, example: 100000 })
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty({ type: String, example: 'Donate Message' })
  @IsNotEmpty()
  @IsString()
  message: string;

  @ApiProperty({
    type: String,
    format: 'uuid',
    example: '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d',
  })
  @IsNotEmpty()
  @IsUUID()
  storyId: string;
}
