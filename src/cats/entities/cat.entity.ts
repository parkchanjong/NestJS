import { ApiProperty } from '@nestjs/swagger';

export class CatEntity {
  /**
   * The name of the Cat
   * @example Kitty
   */
  name: string;

  @ApiProperty({
    type: Number,
    example: 1,
    description: '고양이 나이',
  })
  age: number;

  @ApiProperty({
    type: String,
    example: '렉돌',
    description: '고양이 품종',
  })
  breed: string;
}
