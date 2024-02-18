import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuildTtsSettings } from "./entities/guild_tts_settings.entity";
import { GuildChannelLinks } from "./entities/guild_channel_links";
import { GuildTtsSettingsService } from "./guild_tts_settings.service";

@Module({
    imports: [TypeOrmModule.forFeature([GuildTtsSettings, GuildChannelLinks])],
    providers: [GuildTtsSettingsService],
})
export class GuildTtsSettingsModule {}
