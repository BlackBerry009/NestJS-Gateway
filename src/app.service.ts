import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    throw new BadRequestException('Not Found');
    return 'Hello World!';
  }

  testPost() {
    return {
      a: 1,
      name: 'lyf',
    };
  }
}
