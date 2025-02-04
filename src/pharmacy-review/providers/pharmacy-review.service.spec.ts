import { Test, TestingModule } from '@nestjs/testing';
import { PharmacyReviewService } from './pharmacy-review.service';
import { IPharmacyReviewRepository } from '../interfaces/pharmacy-review.repository.interface';
import { PharmacyReview } from '../schemas/pharmacy-review.schema';

describe('PharmacyReviewService', () => {
  let service: PharmacyReviewService;
  let mockRepository: jest.Mocked<IPharmacyReviewRepository>;

  beforeEach(async () => {
    // Create mock repository with all required methods
    mockRepository = {
      findAll: jest.fn(),
      findById: jest.fn(),
      findByPharmacy: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
      updateReportStatus: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PharmacyReviewService,
        {
          provide: 'IPharmacyReviewRepository',
          useValue: mockRepository,
        },
      ],
    }).compile();

    service = module.get<PharmacyReviewService>(PharmacyReviewService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Example test for getAllReviews
  describe('getAllReviews', () => {
    it('should return all reviews based on filters', async () => {
      const mockReviews: PharmacyReview[] = [
        // Add mock review data here
      ];
      mockRepository.findAll.mockResolvedValue(mockReviews);

      const filters = { isReported: true };
      const result = await service.getAllReviews(filters);

      expect(mockRepository.findAll).toHaveBeenCalledWith(filters);
      expect(result).toEqual(mockReviews);
    });
  });
});
