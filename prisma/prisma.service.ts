import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy { 
    async onModuleInit(){
        await this.$connect();
    }

    async onModuleDestroy(){
        await this.$disconnect();
    }
    
}

