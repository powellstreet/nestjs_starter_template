import { Injectable } from '@nestjs/common';
import { CreateTemplateRequestDto } from './dto/create-template.dto';

@Injectable()
export class TemplateService {
  async create(body: CreateTemplateRequestDto) {
    const createdDataId = 1;
    const data = {
      id: createdDataId,
      ...body,
    };
    return 'This action adds a new template';
  }

  async findAll() {
    const data = [];
    return data;
  }
}
