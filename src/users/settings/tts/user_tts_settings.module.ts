import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserTtsSettings } from "./entities/user_tts_settings.entity";
import { UserTtsSettingsController } from "./user_tts_settings.controller";
import { UserTtsSettingsService } from "./user_tts_settings.service";

@Module({
    imports: [TypeOrmModule.forFeature([UserTtsSettings])],
    controllers: [UserTtsSettingsController],
    providers: [UserTtsSettingsService],
})
export class UserTtsSettingsModule {}
