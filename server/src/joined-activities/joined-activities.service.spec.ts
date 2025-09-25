import { Test, TestingModule } from '@nestjs/testing';
import { JoinedActivitiesService } from './joined-activities.service';

describe('JoinedActivitiesService', () => {
  let service: JoinedActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JoinedActivitiesService],
    }).compile();

    service = module.get<JoinedActivitiesService>(JoinedActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
