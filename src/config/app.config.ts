import { ConfigService } from '@nestjs/config';

export const getAppConfig = (configService: ConfigService) => ({
  port: configService.get<number>('APP_PORT', 3000),
  environment: configService.get<string>('NODE_ENV', 'development'),
});
