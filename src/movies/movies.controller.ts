import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
} from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@ApiTags('movies')
@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @ApiOperation({ summary: '모든 영화 가져오기' })
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @ApiOperation({ summary: 'id로 영화 가져오기' })
  @Get(':id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @ApiOperation({ summary: '영화 생성' })
  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @ApiOperation({ summary: '영화 삭제' })
  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @ApiOperation({ summary: '영화 업데이트' })
  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
