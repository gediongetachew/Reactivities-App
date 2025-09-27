import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Prisma } from "@prisma/client";
import { UserService } from "src/user/user.service";
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService, private readonly jwtService:JwtService) {}

    async signUp(createUserDto: Prisma.UserCreateInput) {
        return this.userService.create(createUserDto);
    }

    async signIn(email:string, password:string,){
        const user = await this.userService.findUnique(email);
        if(!user) throw new UnauthorizedException("invalid email or password");
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid) throw new UnauthorizedException('invalid email or password');
        const access_token = await this.jwtService.signAsync({email:user?.email, Id:user?.Id, role:user?.role})
        return {access_token};
    }
}