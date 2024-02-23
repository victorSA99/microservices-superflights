import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtStrategy } from './strategies/jwt.strategy';
import { ProxyModule } from 'src/common/proxy/proxy.module';
@Module({
  imports: [
    UserModule,
    PassportModule,
    ProxyModule,
    JwtModule.register({
      secret: 'JWTcl4v3s3cr3t4@Api',
      signOptions: {
        expiresIn: '12h',
        audience: 'https://superflights.com',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
