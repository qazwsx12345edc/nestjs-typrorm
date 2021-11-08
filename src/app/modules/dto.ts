import { ApiProperty } from '@nestjs/swagger';

export class reverseStrReq {
  @ApiProperty({
    type: 'string',
    description: 'msg',
  })
  msg: string;
}
