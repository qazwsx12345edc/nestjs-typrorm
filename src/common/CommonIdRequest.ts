import { ApiProperty } from '@nestjs/swagger';

export class CommonIdRequest {
  @ApiProperty({
    type: 'string',
    description: 'id',
  })
  id: string;
}
