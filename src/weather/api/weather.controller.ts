import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { InjectRepository } from '@nestjs/typeorm';
import { GetPageListRequest } from 'src/common/GetPageListRequest';
import { Repository } from 'typeorm';
import { CommonIdRequest } from '../../common/CommonIdRequest';
import { save_weather_vo } from '../modules/save_weather_vo';
import { Weather } from '../modules/weather.entity';
import { WeatherService } from './weather.service';

@Controller('api/weather')
@ApiTags('Weather')
export class WeatherController {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
    private weatherService: WeatherService,
  ) {}

  @Get('list')
  @ApiOperation({ summary: 'Get entire list' })
  findAll(): Promise<Weather[]> {
    return this.weatherRepository.find();
  }

  @Get('pageList')
  @ApiOperation({ summary: 'Get page list' })
  pageList(@Query() request: GetPageListRequest): Promise<Weather[]> {
    return this.weatherRepository.find({
      skip: (request.pageIndex - 1) * request.pageSize,
      take: request.pageSize,
    });
  }

  @Get('query')
  @ApiOperation({ summary: 'Query item by uuid' })
  findOne(@Query() request: CommonIdRequest): Promise<Weather> {
    return this.weatherRepository.findOne(request.id);
  }

  @Post('remove')
  @ApiBody({
    type: CommonIdRequest,
    description: 'id',
  })
  @ApiOperation({ summary: 'Remove item by uuid' })
  async remove(@Body() request: CommonIdRequest): Promise<void> {
    await this.weatherRepository.delete(request.id);
  }

  @Post('save')
  @ApiBody({
    type: save_weather_vo,
    description: 'new weather',
  })
  @ApiOperation({
    summary: 'Save new weather',
  })
  async save(@Body() data: save_weather_vo): Promise<void> {
    await this.weatherService.saveWeather(data);
  }
}
