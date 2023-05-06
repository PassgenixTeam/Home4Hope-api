import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCurrencyDto {
  @ApiProperty({ type: String, example: 'USD' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, example: 'USD' })
  @IsString()
  @IsNotEmpty()
  code: string;

  @ApiProperty({ type: String, example: '$' })
  @IsString()
  @IsNotEmpty()
  symbol: string;
}
