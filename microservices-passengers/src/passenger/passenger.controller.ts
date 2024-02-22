import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PassengerDto } from './dto/passenger.dto';
import { PassengerService } from './passenger.service';

@Controller('api/v1/passenger')
export class PassengerController {
  constructor(private readonly passengerService: PassengerService) {}

  @Post()
  create(@Body() passengerDto: PassengerDto) {
    return this.passengerService.create(passengerDto);
  }
  @Get()
  findAll() {
    return this.passengerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.passengerService.findOne(id);
  }
  @Put(':id')
  Update(@Param('id') id: string, @Body() PassengerDto: PassengerDto) {
    return this.passengerService.update(id, PassengerDto);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.passengerService.delete(id);
  }
}
