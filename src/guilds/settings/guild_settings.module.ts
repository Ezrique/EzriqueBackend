import { Module } from "@nestjs/common";
import { GuildTtsSettingsModule } from "./tts/guild_tts_settings.module";
import { GuildMusicSettingsModule } from "./music/guild_music_settings.module";

@Module({
    imports: [GuildTtsSettingsModule, GuildMusicSettingsModule],
})
export class GuildSettingsModule {}
