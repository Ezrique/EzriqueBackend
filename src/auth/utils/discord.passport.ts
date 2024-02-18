import { Inject, Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Profile, Strategy } from "passport-discord";
import { IAuthService } from "../auth.service";

@Injectable()
export class DiscordStrategy extends PassportStrategy(Strategy) {
    constructor(
        @Inject("AUTH_SERVICE") private readonly authService: IAuthService,
    ) {
        super({
            clientID: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            callbackURL: process.env.DISCORD_REDIRECT_URI,
            scope: ["identify", "email"],
        });
    }

    async validate(
        accessToken: string,
        refreshToken: string,
        profile: Profile,
    ) {
        return await this.authService.validate({
            id: parseInt(profile.id),
            email: profile.email,
            username: profile.username,
            avatar: profile.avatar,
        });
    }
}
