import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  /**
   * The name of the Cat
   * @example Kitty
   */
  id: number;

  @ApiProperty({
    type: String,
    example: '인터스텔라',
    description: '영화제목',
  })
  title: string;

  @ApiProperty({
    type: Number,
    example: 2020,
    description: '영화 개봉 연도',
  })
  year: number;

  @ApiProperty({
    type: [String],
    example: ['스릴러', '코미디'],
    description: '영화 장르',
  })
  genres: string[];
}
