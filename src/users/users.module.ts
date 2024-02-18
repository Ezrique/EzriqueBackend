import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UserSettingsModule } from "./settings/user_settings.module";

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([User]), UserSettingsModule],
    controllers: [UsersController],
})
export class UsersModule {}
