import { BadRequestException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(
    private readonly configService: ConfigService
  ) {}
  getHello(): string {
    // throw new BadRequestException('Not Found');
    throw new Error('asd')
    return 'Hello World!';
  }

  testPost() {
    return {
      a: 1,
      name: 'lyf',
    };
  }


  getPathVariable() {
    return this.configService.get('PERSON').name
  }
}
