import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateOrgDto {
  @ApiProperty({ type: String, example: 'Org Name' })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({ type: String, example: 'org@gmail.com' })
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty({ type: String, example: '0123456789' })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({ type: String, example: '123 Street' })
  @IsNotEmpty()
  @IsString()
  address: string;

  @ApiProperty({ type: String, example: 'City' })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ type: String, example: 'State' })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ type: String, example: '12345' })
  @IsNotEmpty()
  @IsString()
  zip: string;

  @ApiProperty({ type: String, example: 'Country' })
  @IsNotEmpty()
  @IsString()
  country: string;

  @ApiProperty({ type: String, example: 'https://org.com' })
  @IsNotEmpty()
  @IsString()
  website: string;

  @ApiProperty({ type: String, example: 'https://org.com/avatar.png' })
  @IsNotEmpty()
  @IsString()
  avatar: string;

  @ApiProperty({ type: String, example: 'Org Description' })
  @IsNotEmpty()
  @IsString()
  description: string;
}
