import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CatEntity {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'The cat id', example: 1 })
  id: number;

  @Column()
  @ApiProperty({ description: 'The cat name', example: 'Kitty' })
  name: string;

  @Column({ enum: ['MALE', 'FEMALE'] })
  @ApiProperty({ description: 'The cat sex', example: 'MALE' })
  sex: 'MALE' | 'FEMALE';

  @Column()
  @ApiProperty({ description: 'The cat age', example: 1 })
  age: number;

  @Column()
  @ApiProperty({ description: 'The cat breed', example: 'Persian' })
  breed: string;

  @Column()
  @ApiProperty({ description: 'The cat color', example: 'White' })
  color: string;

  @Column({
    nullable: true,
  })
  @ApiProperty({ description: 'The cat owner id', example: 1 })
  ownerId?: number;
}
