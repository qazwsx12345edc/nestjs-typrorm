import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WeatherModule } from '../weather/api/weather.module';
import { RobotModule } from 'src/ding-robot/api/robot.module';

@Module({
  imports: [TypeOrmModule.forRoot(), WeatherModule, RobotModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
