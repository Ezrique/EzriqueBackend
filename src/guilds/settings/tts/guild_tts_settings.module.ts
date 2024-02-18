import { Global, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GuildTtsSettings } from "./entities/guild_tts_settings.entity";
import { GuildChannelLinks } from "./entities/guild_channel_links";
import { GuildTtsSettingsService } from "./guild_tts_settings.service";

@Global()
@Module({
    imports: [TypeOrmModule.forFeature([GuildTtsSettings, GuildChannelLinks])],
    providers: [
        {
            provide: "GUILD_TTS_SETTINGS_SERVICE",
            useClass: GuildTtsSettingsService,
        }
    ]
})
export class GuildTtsSettingsModule {}
