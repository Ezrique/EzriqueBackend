import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserMusicSettings } from "./entities/user_music_settings.entity";
import { UserMusicSettingsService } from "./user_music_settings.service";
import { UserMusicSettingsController } from "./user_music_settings.controller";

@Module({
    imports: [TypeOrmModule.forFeature([UserMusicSettings])],
    controllers: [UserMusicSettingsController],
    providers: [UserMusicSettingsService],
})
export class UserMusicSettingsModule {}
