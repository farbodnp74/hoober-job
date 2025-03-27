import { ConfigModule, ConfigService } from "@nestjs/config";
import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from "@nestjs/typeorm";


export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (
    configService: ConfigService,
  ): Promise<TypeOrmModuleOptions> => {
    return {
      type: "postgres",
      host: configService.get("DB_HOST", "database"),
      port: parseInt(configService.get("DB_PORT", "5432")),
      username: configService.get("DB_USERNAME", "postgres"),
      synchronize: configService.get("DB_SYNC", "true") === "true",
      logging: configService.get("DB_QUERY_LOG", "true") === "true",
      entities: [
      

      ],
    };
  },
};
