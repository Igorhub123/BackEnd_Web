import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MarmitHubModule } from './marmit-hub/marmit-hub.module';
import { databaseConfig } from './config/database.config';

@Module({
  imports: [
    MarmitHubModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
