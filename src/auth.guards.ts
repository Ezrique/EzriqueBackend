import { Injectable, CanActivate, ExecutionContext } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Request } from "express";

@Injectable()
export class DiscordAuthGuard extends AuthGuard("discord") {
    async canActivate(context: ExecutionContext) {
        const result = (await super.canActivate(context)) as boolean;
        const request: Request = context.switchToHttp().getRequest();
        await super.logIn(request);
        return result;
    }
}

@Injectable()
export class BotAuthGuard extends AuthGuard("bot") {
    async canActivate(context: ExecutionContext) {
        const request: Request = context.switchToHttp().getRequest();
        return (
            request.headers.authorization ===
            `${process.env.BOT_AUTHORIZATION} ${process.env.BOT_KEY}`
        );
    }
}

@Injectable()
export class AuthenticatedGuard implements CanActivate {
    async canActivate(context: ExecutionContext) {
        const request: Request = context.switchToHttp().getRequest();
        return request.isAuthenticated();
    }
}
