import { Module } from '@nestjs/common';
import { FlightController } from './flight.controller';
import { FlightService } from './flight.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightSchema } from './schema/flight.schema';
import { FLIGTH, PASSENGER } from 'src/common/models/models';
import { PassengerSchema } from './schema/passenger.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: FLIGTH.name,
        useFactory: () => FlightSchema.plugin(require('mongoose-autopopulate')),
      },
      {
        name: PASSENGER.name,
        useFactory: () => PassengerSchema,
      },
    ]),
  ],
  controllers: [FlightController],
  providers: [FlightService],
})
export class FlightModule {}
