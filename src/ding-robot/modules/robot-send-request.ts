import { ApiProperty } from '@nestjs/swagger';

export class RobotSendRequest {
  @ApiProperty({
    type: 'string',
    description: 'msg u 1 2 send',
  })
  msg: string;
}
