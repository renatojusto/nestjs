import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LiveController } from './live/live.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Live } from './live/live.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      // @ts-ignore
      type: process.env.TYPEORM_CONNECTION,
      // host: process.env.TYPEORM_HOST,
      // port: parseInt(process.env.TYPEORM_PORT),
      // username: process.env.TYPEORM_USERNAME,
      // password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      entities: [Live]
    }),
    TypeOrmModule.forFeature([Live]),
    // LiveModule
  ],
  controllers: [AppController, LiveController],
  providers: [AppService],
})
export class AppModule {}
