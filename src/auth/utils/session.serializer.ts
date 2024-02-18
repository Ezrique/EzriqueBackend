import { PartialUser } from "../entities/user.entity";
import { AuthService } from "../auth.service";
import { PassportSerializer } from "@nestjs/passport";

export class SessionSerializer extends PassportSerializer {
    constructor(private readonly authService: AuthService) {
        super();
    }

    async serializeUser(
        user: PartialUser,
        done: (err: Error, id: number) => void,
    ) {
        const foundUser = await this.authService.find(user.id);
        done(null, foundUser.id);
    }

    async deserializeUser(
        userId: number,
        done: (err: Error, payload: PartialUser) => void,
    ) {
        const user = await this.authService.find(userId);
        return user ? done(null, user) : done(null, null);
    }
}
