import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RobotSendRequest } from '../modules/robot-send-request';
import { RobotService } from './robot.service';

@Controller('api/robot')
@ApiTags('Robot')
export class RobotController {
  constructor(private robotService: RobotService) {}

  @Post('send')
  @ApiOperation({ summary: 'send message by dingtalk robot' })
  RobotSend(@Body() data: RobotSendRequest) {
    this.robotService.robotSend(data.msg);
  }
}
