import { ApiProperty } from '@nestjs/swagger';

export class Movie {
  /**
   * The name of the Cat
   * @example Kitty
   */
  id: number;

  @ApiProperty({
    example: '인터스텔라',
    description: '영화제목',
  })
  title: string;

  @ApiProperty({
    example: 2020,
    description: '영화 개봉 연도',
  })
  year: number;

  @ApiProperty({
    example: ['스릴러', '코미디'],
    description: '영화 장르',
  })
  genres: string[];
}
