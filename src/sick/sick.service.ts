import { Injectable } from '@nestjs/common';
import { EntityManager, Repository } from 'typeorm';
import { InjectEntityManager, InjectRepository } from '@nestjs/typeorm/dist';
import { CreateSickDto } from './dto/create-sick.dto';
import { UpdateSickDto } from './dto/update-sick.dto';
import { Sick } from './entities/sick.entity';

@Injectable()
export class SickService {
  @InjectEntityManager()
  private manager: EntityManager;

  @InjectRepository(Sick)
  private sickRepository: Repository<Sick>;

  create(createSickDto: CreateSickDto) {
    this.sickRepository.save(createSickDto);
  }

  findAll() {
    this.manager.find(Sick);
  }

  findOne(id: number) {
    this.manager.findOne(Sick, {
      where: { id },
    });
  }

  update(id: number, updateSickDto: UpdateSickDto) {
    this.manager.save(Sick, {
      id: id,
      ...updateSickDto,
    });
  }

  remove(id: number) {
    this.manager.delete(Sick, id);
  }
}
