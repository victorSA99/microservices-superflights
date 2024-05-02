import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { FLIGTH } from 'src/common/models/models';
import { FligthDTO } from './dto/flight.dto';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGTH.name) private readonly Model: Model<IFlight>,
  ) {}

  async create(fligthDTO: FligthDTO): Promise<IFlight> {
    const newFligth = new this.Model(fligthDTO);
    return await newFligth.save();
  }

  async findAll(): Promise<IFlight[]> {
    return await this.Model.find().populate('passengers');
  }
  async findOne(id: string): Promise<IFlight> {
    return await this.Model.findById(id).populate('passengers');
  }
  async update(id: string, body: FligthDTO): Promise<IFlight> {
    return await this.Model.findByIdAndUpdate(id, body, { new: true });
  }
  async delete(id: string): Promise<any> {
    return await this.Model.findByIdAndDelete(id);
  }

  async addPassenger(fligtId: string, passengerId: string): Promise<IFlight> {
    return await this.Model.findByIdAndUpdate(
      fligtId,
      {
        $addToSet: { passengers: passengerId },
      },
      { new: true },
    ).populate('passengers');
  }
}
