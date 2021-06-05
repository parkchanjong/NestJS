import { IsInt, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {
  @IsString()
  @ApiProperty({
    type: String,
    example: '츈식이',
    description: '고양이 이름',
  })
  readonly name: string;

  @IsInt()
  @ApiProperty({
    type: Number,
    example: 1,
    description: '고양이 나이',
  })
  readonly age: number;

  @IsString()
  @ApiProperty({
    type: String,
    example: '렉돌',
    description: '고양이 품종',
  })
  readonly breed: string;
}
