import { HttpStatus, Injectable } from '@nestjs/common';
import { PassengerDto } from './dto/passenger.dto';
import { IPassenger } from '../common/interface/passenger.interface';
import { InjectModel } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';

import { Model } from 'mongoose';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) {}

  async create(passengerdto: PassengerDto): Promise<IPassenger> {
    const newPassenger = new this.model(passengerdto);
    return await newPassenger.save();
  }
  async findAll(): Promise<IPassenger[]> {
    return await this.model.find();
  }
  async findOne(id: string): Promise<IPassenger> {
    return await this.model.findById(id);
  }
  async update(id: string, passenger: PassengerDto): Promise<IPassenger> {
    return await this.model.findByIdAndUpdate(id, passenger, { new: true });
  }

  async delete(id: string) {
    await this.model.findByIdAndDelete(id);
    return {
      status: HttpStatus.OK,
      msg: 'Deleted',
    };
  }
}
