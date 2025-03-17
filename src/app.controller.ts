import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat.dto';
import {
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
} from '@nestjs/swagger';
import { UpdateCatDto } from './dto/update-cat.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CreateCatDto,
  })
  createCat(@Body() payload: CreateCatDto) {
    return this.appService.createCat(payload);
  }

  @Put('/:id')
  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: UpdateCatDto,
  })
  @ApiNotFoundResponse({
    description: 'The record with the given id was not found.',
  })
  updateCat(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCatDto,
  ) {
    return this.appService.updateCat(id, payload);
  }

  @Delete('/:id')
  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
  })
  @ApiNotFoundResponse({
    description: 'The record with the given id was not found.',
  })
  deleteCat(@Param('id', ParseIntPipe) id: number) {
    return this.appService.deleteCat(id);
  }
}
