import { Module } from '@nestjs/common';

import { LoggingMiddleware } from './logging.middleware';

@Module({
  providers: [LoggingMiddleware],
})
export class MiddlewareModule {}
