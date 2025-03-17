import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateCatDto } from './dto/create-cat.dto';
import {
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { UpdateCatDto } from './dto/update-cat.dto';
import { CatEntity } from './app.entity';

@Controller()
@ApiTags('cats')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({
    operationId: 'getCats',
    description: 'This action returns all cats',
    summary: 'Get all cats',
    parameters: [
      {
        name: 'limit',
        in: 'query',
        required: true,
        schema: {
          type: 'integer',
          default: 10,
        },
      },
    ],
  })
  @ApiOkResponse({
    description: 'This action returns all cats',
    type: CatEntity,
    isArray: true,
  })
  getCats(@Query('limit', ParseIntPipe) limit: number) {
    return this.appService.getCats({
      limit,
    });
  }

  @Get('/:id')
  @ApiOperation({ operationId: 'getCatsById' })
  @ApiOkResponse({
    description: 'This action returns a cat by id',
    type: CatEntity,
  })
  @ApiNotFoundResponse({
    description: 'The record with the given id was not found.',
  })
  getCatsById(@Param('id', ParseIntPipe) id: number) {
    return this.appService.getCatsById(id);
  }

  @Post()
  @ApiOperation({ operationId: 'createCat' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CatEntity,
  })
  createCat(@Body() payload: CreateCatDto) {
    return this.appService.createCat(payload);
  }

  @Put('/:id')
  @ApiOperation({ operationId: 'updateCat' })
  @ApiNoContentResponse({
    description: 'The record has been successfully updated.',
    type: UpdateCatDto,
  })
  @ApiNotFoundResponse({
    description: 'The record with the given id was not found.',
  })
  @HttpCode(204)
  async updateCat(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCatDto,
  ) {
    await this.appService.updateCat(id, payload);
  }

  @ApiOperation({ operationId: 'deleteCat' })
  @Delete('/:id')
  @ApiNoContentResponse({
    description: 'The record has been successfully deleted.',
  })
  @ApiNotFoundResponse({
    description: 'The record with the given id was not found.',
  })
  @HttpCode(204)
  async deleteCat(@Param('id', ParseIntPipe) id: number) {
    await this.appService.deleteCat(id);
  }
}
