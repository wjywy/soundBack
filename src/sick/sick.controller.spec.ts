import { Test, TestingModule } from '@nestjs/testing';
import { SickController } from './sick.controller';
import { SickService } from './sick.service';

describe('SickController', () => {
  let controller: SickController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SickController],
      providers: [SickService],
    }).compile();

    controller = module.get<SickController>(SickController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
