import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Sick } from './sick/entities/sick.entity';
import { SickModule } from './sick/sick.module';

@Module({
  imports: [
    SickModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '630wujiayuwy',
      database: 'soundbe',
      synchronize: true,
      logging: true,
      entities: [Sick],
      poolSize: 10,
      connectorPackage: 'mysql2',
      extra: {},
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
