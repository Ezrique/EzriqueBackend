import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GuildMusicSettings } from "./entities/guild_music_settings.entity";
import { GuildService } from "src/guilds/guilds.service";

@Injectable()
export class GuildMusicSettingsService {
    constructor(
        @InjectRepository(GuildMusicSettings)
        private readonly musicSettingsRepository: Repository<GuildMusicSettings>,
        private readonly guildService: GuildService,
    ) {}

    async create(id: number): Promise<GuildMusicSettings> {
        const settings = this.musicSettingsRepository.create({ id });
        return this.musicSettingsRepository.save(settings);
    }

    async get(id: number): Promise<GuildMusicSettings | null> {
        const settings = await this.musicSettingsRepository.findOne({
            where: { id },
        });

        if (!settings && (await this.guildService.has(id)))
            return this.create(id);
        return settings;
    }

    async update(
        id: number,
        settings: GuildMusicSettings,
    ): Promise<GuildMusicSettings | null> {
        await this.musicSettingsRepository.update(id, settings);
        return this.get(id);
    }
}
