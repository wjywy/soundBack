import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SickService } from './sick.service';
import { CreateSickDto } from './dto/create-sick.dto';
import { UpdateSickDto } from './dto/update-sick.dto';

@Controller('sick')
export class SickController {
  constructor(private readonly sickService: SickService) {}

  @Post()
  create(@Body() createSickDto: CreateSickDto) {
    return this.sickService.create(createSickDto);
  }

  @Get()
  findAll() {
    return this.sickService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sickService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSickDto: UpdateSickDto) {
    return this.sickService.update(+id, updateSickDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sickService.remove(+id);
  }
}
