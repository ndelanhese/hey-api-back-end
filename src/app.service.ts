import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CatEntity } from './app.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(CatEntity)
    private readonly catRepository: Repository<CatEntity>,
  ) {}

  getHello() {
    return 'Hello World!';
  }

  async getCats({ limit = 10 }: { limit: number }) {
    return await this.catRepository.find({
      take: limit,
    });
  }

  getCatsById(id: number) {
    return this.catRepository.findOneBy({
      id,
    });
  }

  createCat(payload: CreateCatDto) {
    return this.catRepository.save(payload);
  }

  updateCat(id: number, payload: UpdateCatDto) {
    if (id === 123) {
      throw new NotFoundException(
        'The record with the given id was not found.',
      );
    }

    return this.catRepository.update(id, payload);
  }

  deleteCat(id: number) {
    if (id === 123) {
      throw new NotFoundException(
        'The record with the given id was not found.',
      );
    }

    return this.catRepository.delete(id);
  }
}
