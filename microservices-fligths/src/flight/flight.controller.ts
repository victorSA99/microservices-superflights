import { Controller } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FligthDTO } from './dto/flight.dto';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { FligthMSG } from 'src/common/constants';

@Controller()
export class FlightController {
  constructor(private readonly fligthService: FlightService) {}

  @MessagePattern(FligthMSG.CREATE)
  create(@Payload() fligthDTO: FligthDTO) {
    return this.fligthService.create(fligthDTO);
  }
  @MessagePattern(FligthMSG.FIND_ALL)
  findAll() {
    return this.fligthService.findAll();
  }

  @MessagePattern(FligthMSG.FIND_ONE)
  findOne(@Payload() id: string) {
    return this.fligthService.findOne(id);
  }

  @MessagePattern(FligthMSG.UPDATE)
  update(@Payload() payload) {
    return this.fligthService.update(payload.id, payload.fligthDTO);
  }
  @MessagePattern(FligthMSG.DELETE)
  delete(@Payload() id: string) {
    return this.fligthService.delete(id);
  }

  @MessagePattern(FligthMSG.ADD_PASSENGER)
  addPassenger(@Payload() payload) {
    return this.fligthService.addPassenger(
      payload.flightId,
      payload.passengerId,
    );
  }
}
