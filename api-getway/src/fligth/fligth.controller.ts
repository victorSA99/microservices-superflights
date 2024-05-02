import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { FligthMSG, PassengerMSG } from 'src/common/constants';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { FligthDTO } from './dto/flight.dto';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@ApiTags('api/v2/fligth')
@UseGuards(JwtAuthGuard)
@Controller('api/v2/fligth')
export class FligthController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyFligth = this.clientProxy.clientProxyPassengers();
  private _clientProxyPassenger = this.clientProxy.clientProxyPassengers();

  @Post()
  create(@Body() fligthDto: FligthDTO): Observable<IFlight> {
    return this._clientProxyFligth.send(FligthMSG.CREATE, fligthDto);
  }

  @Get()
  findAll(): Observable<IFlight[]> {
    return this._clientProxyFligth.send(FligthMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string): Observable<IFlight> {
    return this._clientProxyFligth.send(FligthMSG.FIND_ONE, '');
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() fligthDTO: FligthDTO,
  ): Observable<IFlight> {
    return this._clientProxyFligth.send(FligthMSG.UPDATE, {
      id,
      fligthDTO,
    });
  }

  @Delete(':id')
  delete(@Param('id') id: string): Observable<any> {
    return this._clientProxyFligth.send(FligthMSG.DELETE, id);
  }

  @Post(':fligthId/passenger/:passengerId')
  async addPassenger(
    @Param('fligthId') fligthId: string,
    @Param('passengerId') passengerId: string,
  ) {
    const passenger = await this._clientProxyPassenger
      .send(PassengerMSG.FIND_ONE, passengerId)
      .toPromise();

    if (!passenger)
      throw new HttpException('Passenger Not Found', HttpStatus.NOT_FOUND);

    return this._clientProxyFligth.send(FligthMSG.ADD_PASSENGER, fligthId);
  }
}
