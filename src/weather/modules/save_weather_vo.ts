import { ApiProperty } from '@nestjs/swagger';

export class save_weather_vo {
  @ApiProperty({})
  city_id: number;

  @ApiProperty({})
  weather_kind: string;

  @ApiProperty({})
  temp: number;

  @ApiProperty({})
  temp_high: number;

  @ApiProperty({})
  temp_low: number;

  @ApiProperty({})
  preesure: number;

  @ApiProperty({})
  wind_speed: number;

  @ApiProperty({})
  wind_direct: string;

  @ApiProperty({})
  wind_power: string;
}
