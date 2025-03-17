import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello World!';
  }

  createCat(payload: CreateCatDto) {
    return JSON.stringify(payload, null, 2);
  }

  updateCat(id: number, payload: UpdateCatDto) {
    if (id === 123) {
      throw new NotFoundException(
        'The record with the given id was not found.',
      );
    }

    return JSON.stringify({ id, ...payload }, null, 2);
  }

  deleteCat(id: number) {
    if (id === 123) {
      throw new NotFoundException(
        'The record with the given id was not found.',
      );
    }

    return 'The record has been successfully deleted.';
  }
}
