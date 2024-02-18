import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuildMusicSettings } from "./entities/guild_music_settings.entity";
import { GuildMusicSettingsService } from "./guild_music_settings.service";
import { GuildMusicSettingsController } from "./guild_music_settings.controller";

@Module({
    imports: [TypeOrmModule.forFeature([GuildMusicSettings])],
    controllers: [GuildMusicSettingsController],
    providers: [GuildMusicSettingsService],
})
export class GuildMusicSettingsModule {}
