import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import {ROLES_KEY} from '../decorators/roles.decorator'

@Injectable()
export class AuthorizationGuard implements CanActivate {
   
    constructor(private readonly reflector: Reflector) {}

   canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request['user'];
    const resourceId = request.params.id;
    const requiredroles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY,[
        context.getHandler(),
        context.getClass()
    ]);
    
    if(requiredroles?.length && requiredroles.includes(user.role)) {
        return true;
    }
    if(user.Id === Number(resourceId)){
        return true
    }
    throw new ForbiddenException('You Are Not Allowed To Access This Resource')
  }
}
