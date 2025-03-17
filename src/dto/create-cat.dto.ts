import { ApiProperty } from '@nestjs/swagger';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Max,
} from 'class-validator';

export class CreateCatDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The cat name', example: 'Kitty' })
  name: string;

  @IsEnum(['MALE', 'FEMALE'])
  @IsNotEmpty()
  @ApiProperty({ description: 'The cat sex', example: 'MALE' })
  sex: 'MALE' | 'FEMALE';

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @Max(50)
  @ApiProperty({ description: 'The cat age', example: 1 })
  age: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The cat breed', example: 'Persian' })
  breed: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'The cat color', example: 'White' })
  color: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ description: 'The cat owner id', example: 1 })
  ownerId?: number;
}
