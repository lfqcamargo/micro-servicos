import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';
import { ProxyService } from './proxy/services/proxy.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly proxyService: ProxyService,
  ) {}
}
