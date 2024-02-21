import { Module } from '@nestjs/common';
import { FligthController } from './fligth.controller';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
  imports: [ProxyModule],
  controllers: [FligthController],
})
export class FligthModule {}
