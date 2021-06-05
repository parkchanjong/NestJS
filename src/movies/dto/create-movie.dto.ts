import { IsString, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({
    type: String,
    example: '테넷',
    description: '영화제목',
  })
  @IsString()
  readonly title: string;

  @ApiProperty({
    type: Number,
    example: 2021,
    description: '개봉 연도',
  })
  @IsNumber()
  readonly year: number;

  @ApiProperty({
    type: [String],
    example: ['SF', '액션'],
    description: '장르',
  })
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}
