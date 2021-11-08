import { Injectable } from '@nestjs/common';
import { reverseStrReq } from './modules/dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  reverseMsg(data: reverseStrReq) {
    return data.msg.split('').reverse().join('');
  }
}
