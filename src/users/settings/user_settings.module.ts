import { Global, Module } from "@nestjs/common";
import { UserTtsSettingsModule } from "./tts/user_tts_settings.module";
import { UserMusicSettingsModule } from "./music/user_music_settings.module";

@Global()
@Module({
    imports: [UserTtsSettingsModule, UserMusicSettingsModule],
})
export class UserSettingsModule {}
