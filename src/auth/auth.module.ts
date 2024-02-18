import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { AuthController } from "./auth.controller";
import { SessionSerializer } from "./utils/session.serializer";
import { AuthService } from "./auth.service";
import { DiscordStrategy } from "./utils/discord.passport";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [AuthController],
    providers: [DiscordStrategy, SessionSerializer, AuthService],
})
export class AuthModule {}
