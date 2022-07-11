import { Controller, Get, Post, Version } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Version('1')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('po')
  testPost() {
    return this.appService.testPost();
  }

  @Get('env')
  getVariable() {
    return this.appService.getPathVariable()
  }

}
