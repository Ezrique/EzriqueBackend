import { Global, Module } from "@nestjs/common";
import { GuildSettingsModule } from "./settings/guild_settings.module";
import { GuildService } from "./guilds.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Guild } from "./entities/guild.entity";
import { GuildsController } from "./guilds.controller";

@Global()
@Module({
    imports: [
        TypeOrmModule.forFeature([Guild]),
        GuildSettingsModule
    ],
    controllers: [GuildsController],
    providers: [
        {
            provide: "GUILD_SERVICE",
            useClass: GuildService,
        }
    ]
})
export class GuildsModule {}
