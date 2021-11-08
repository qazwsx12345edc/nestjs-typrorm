import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { reverseStrReq } from './modules/dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('api')
@ApiTags('TestTag')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('HelloWorld')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('ReverseStr')
  @ApiOperation({ summary: '反转字符串' })
  @ApiBody({
    type: reverseStrReq,
    description: '输入的字符串',
  })
  reverseStr(@Body() data) {
    return this.appService.reverseMsg(data);
  }
}
