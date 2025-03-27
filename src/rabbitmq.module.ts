// rabbitmq.module.ts

import { Module } from '@nestjs/common';
import { RabbitMQController } from './rabbitmq.controller';
import { typeOrmAsyncConfig } from './typeorm.config';
import { TypeOrmModule } from "@nestjs/typeorm";
import { CacheModule } from "@nestjs/cache-manager";
import { cacheAsyncConfig } from "./config/cache.config";
@Module({
  imports: [
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    CacheModule.registerAsync(cacheAsyncConfig),
  ],
  controllers: [RabbitMQController],
})
export class RabbitMQModules {}
