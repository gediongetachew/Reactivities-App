import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Prisma } from '@prisma/client';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService){}

    @Post('signup')
    signup(@Body() createUserDto: Prisma.UserCreateInput) {
        return this.authService.signUp(createUserDto)
    }

    @Post('signin') 
    signin(@Body('email') email:string, @Body('password') password:string){
        return this.authService.signIn(email, password);
    }
}
