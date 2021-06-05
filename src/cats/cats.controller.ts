import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiOkResponse,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { Roles } from '../common/decorators/roles.decorator';
import { RolesGuard } from '../common/guards/roles.guard';
import { ParseIntPipe } from '../common/pipes/parse-int.pipe';
import { CatsService } from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatEntity } from './entities/cat.entity';
import { CatInterFace } from './interfaces/cat.interface';

@UseGuards(RolesGuard)
@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({ summary: '고양이 데이터 생성' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  @ApiOkResponse({ status: 200, description: '고양이 생성 완료' })
  @ApiUnauthorizedResponse({ status: 401, description: '401' })
  @Roles('admin')
  @Post()
  async create(@Body() createCatDto: CreateCatDto): Promise<CatEntity> {
    return this.catsService.create(createCatDto);
  }

  @ApiOperation({ summary: '고양이 데이터 전체 가져오기' })
  @Get()
  async findAll(): Promise<CatInterFace[]> {
    return this.catsService.findAll();
  }

  @ApiOperation({ summary: '고양이 데이터 id값으로 가져오기' })
  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: CatEntity,
  })
  findOne(
    @Param('id', new ParseIntPipe())
    id: number,
  ) {
    // get by ID logic
  }
}
