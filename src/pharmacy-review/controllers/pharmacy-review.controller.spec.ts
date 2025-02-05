import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyReviewController } from './pharmacy-review.controller';
import { PharmacyReviewService } from '../providers/pharmacy-review.service';

describe('PharmacyReviewController', () => {
  let controller: PharmacyReviewController;
  let service: PharmacyReviewService;

  beforeEach(async () => {
    // Create mock repository
    const mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      findByPharmacy: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      updateReportStatus: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [PharmacyReviewController],
      providers: [
        PharmacyReviewService,
        {
          provide: 'IPharmacyReviewRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    controller = module.get<PharmacyReviewController>(PharmacyReviewController);
    service = module.get<PharmacyReviewService>(PharmacyReviewService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  // Example test for getAllReviews
  describe('getAllReviews', () => {
    it('should return all reviews', async () => {
      const result = [];
      jest.spyOn(service, 'getAllReviews').mockResolvedValue(result);

      expect(await controller.getAllReviews({})).toBe(result);
    });
  });
});
