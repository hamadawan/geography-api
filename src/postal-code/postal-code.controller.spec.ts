import { Test, TestingModule } from '@nestjs/testing';
import { PostalCodeController } from './postal-code.controller';
import { PostalCodeService } from './postal-code.service';

describe('PostalCodeController', () => {
  let controller: PostalCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PostalCodeController],
      providers: [PostalCodeService],
    }).compile();

    controller = module.get<PostalCodeController>(PostalCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
