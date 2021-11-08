import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Weather } from '../modules/weather.entity';
import { save_weather_vo } from '../modules/save_weather_vo';

@Injectable()
export class WeatherService {
  constructor(
    @InjectRepository(Weather)
    private weatherRepository: Repository<Weather>,
  ) {}

  async saveWeather(weather: save_weather_vo) {
    this.weatherRepository.save(weather);
  }
}
