import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get('/')
  async Runnig() {
    return 'Server is runnnig';
  }
}
