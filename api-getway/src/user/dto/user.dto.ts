import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class UserDTO {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly username: string;
  @IsNotEmpty()
  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  readonly password: string;
}
