import {
  Controller,
  Get,
  Post,
  Body,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

import { SkipAuth } from 'src/common/decorators';

import { TemplateService } from './template.service';

import { CreateTemplateRequestDto } from './dto';
@SkipAuth()
@Controller('template')
export class TemplateController {
  constructor(private readonly templateService: TemplateService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  @ApiOperation({
    summary: '예시 POST API',
    description: '예시 POST API입니다. 설명을 작성해주세요',
  })
  @ApiResponse({
    status: 201,
    description: '자원 생성 성공.',
    type: null,
  })
  async create(@Body() body: CreateTemplateRequestDto) {
    const data = this.templateService.create(body);
    return data;
  }

  @Get()
  @UsePipes(new ValidationPipe())
  @ApiOperation({
    summary: '예시 GET API',
    description: '예시 GET API입니다. 설명을 작성해주세요',
  })
  @ApiResponse({
    status: 201,
    description: '자원 반환 성공.',
    type: null,
  })
  async findAll() {
    const data = this.templateService.findAll();
    return data;
  }
}
