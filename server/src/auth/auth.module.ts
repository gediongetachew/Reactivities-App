import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Module({
  providers: [AuthService],
  controllers: [AuthController],
  imports: [UserModule,JwtModule.register({
    global:true,
    secret: process.env.JWT_SECRET || 'BACKUP_SECRET',
    signOptions: {expiresIn:'1d'}
  })]
})
export class AuthModule {}
