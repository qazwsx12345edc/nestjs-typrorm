import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Weather {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  city_id: number;

  @Column()
  weather_kind: string;

  @Column()
  temp: number;

  @Column()
  temp_high: number;

  @Column()
  temp_low: number;

  @Column()
  preesure: number;

  @Column()
  wind_speed: number;

  @Column()
  wind_direct: string;

  @Column()
  wind_power: string;

  @CreateDateColumn()
  weather_datetime: Date;
}
