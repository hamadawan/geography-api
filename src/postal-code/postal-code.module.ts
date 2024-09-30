import { Module } from '@nestjs/common';
import { PostalCodeService } from './postal-code.service';
import { PostalCodeController } from './postal-code.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [PostalCodeController],
  providers: [PostalCodeService, PrismaService],
})
export class PostalCodeModule {}
