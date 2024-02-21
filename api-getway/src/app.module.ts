import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { PassengerModule } from './passenger/passenger.module';
import { FligthModule } from './fligth/fligth.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true,
    }),
    UserModule,
    PassengerModule,
    FligthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
