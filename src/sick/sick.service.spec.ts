import { Test, TestingModule } from '@nestjs/testing';
import { SickService } from './sick.service';

describe('SickService', () => {
  let service: SickService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SickService],
    }).compile();

    service = module.get<SickService>(SickService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
