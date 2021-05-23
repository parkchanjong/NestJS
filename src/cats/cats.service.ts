import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatEntity } from './entities/cat.entity';
import { CatInterFace } from './interfaces/cat.interface';
@Injectable()
export class CatsService {
  private readonly cats: CatEntity[] = [];

  create(cat: CreateCatDto): CatEntity {
    this.cats.push(cat);
    return cat;
  }

  findOne(id: number): CatEntity {
    return this.cats[id];
  }

  findAll(): CatInterFace[] {
    return this.cats;
  }
}