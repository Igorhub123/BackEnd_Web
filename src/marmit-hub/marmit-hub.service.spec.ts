import { Test, TestingModule } from '@nestjs/testing';
import { MarmitHubService } from './marmit-hub.service';

describe('MarmitHubService', () => {
  let service: MarmitHubService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MarmitHubService],
    }).compile();

    service = module.get<MarmitHubService>(MarmitHubService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
