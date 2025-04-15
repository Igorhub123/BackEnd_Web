import { Test, TestingModule } from '@nestjs/testing';
import { MarmitHubController } from './marmit-hub.controller';
import { MarmitHubService } from './marmit-hub.service';

describe('MarmitHubController', () => {
  let controller: MarmitHubController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MarmitHubController],
      providers: [MarmitHubService],
    }).compile();

    controller = module.get<MarmitHubController>(MarmitHubController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
