import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import {Request} from 'express';
@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext): Promise<boolean>  {
        const request = context.switchToHttp().getRequest<Request>();
        const token = this.getTokenFromHeader(request)
        if(!token) {
            throw new UnauthorizedException('No toekn Provided')
        }
      try {
          const user = await this.jwtService.verifyAsync(token, {
            secret: process.env.JWT_SECRET || "BACKUP_SECRET"
          })
          request['user'] = user;
      } catch (error) {
         throw new UnauthorizedException('Invalid or expired token');
      }
      return true;
    }


    private getTokenFromHeader(request:Request) : string | undefined {
 
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
   
    return type === 'Bearer' ? token : undefined;
}
}

