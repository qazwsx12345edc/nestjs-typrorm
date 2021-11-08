import { ApiProperty } from '@nestjs/swagger';

export class GetPageListRequest {
  @ApiProperty({
    description: '页号',
  })
  pageIndex: number;

  @ApiProperty({
    description: '分页大小',
  })
  pageSize: number;
}
