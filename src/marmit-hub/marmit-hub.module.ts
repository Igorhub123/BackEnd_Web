import { Module } from '@nestjs/common';
import { MarmitHubService } from './marmit-hub.service';
import { MarmitHubController } from './marmit-hub.controller';
import { PrismaService } from 'prisma/prisma.service';

@Module({
  controllers: [MarmitHubController],
  providers: [MarmitHubService, PrismaService],
})
export class MarmitHubModule {}
