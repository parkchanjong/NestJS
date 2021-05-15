import { Controller, Get, Param, Post, Delete, Put, Patch } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movie with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'create';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `remove ${movieId}`;
  }

  @Patch('/:id')
  patch(@Param('id') movieId: string) {
    return `patch ${movieId}`;
  }
}
