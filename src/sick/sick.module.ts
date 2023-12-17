import { Module } from '@nestjs/common';
import { SickService } from './sick.service';
import { SickController } from './sick.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sick } from './entities/sick.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sick])],
  controllers: [SickController],
  providers: [SickService],
})
export class SickModule {}
