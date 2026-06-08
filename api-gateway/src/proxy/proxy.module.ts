import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { CircuitBreakerModule } from 'src/common/circuit-breaker/circuit-breaker.module';
import { FallbackModule } from 'src/common/fallback/fallback.module';

import { ProxyService } from './services/proxy.service';

@Module({
  imports: [HttpModule, CircuitBreakerModule, FallbackModule],
  providers: [ProxyService],
  exports: [ProxyService],
})
export class ProxyModule {}
