import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GuildMusicSettings } from "./entities/guild_music_settings.entity";
import { IGuildService } from "src/guilds/guilds.service";

export interface IGuildMusicSettingsService {
    create(id: number): Promise<GuildMusicSettings>;
    get(id: number): Promise<GuildMusicSettings | null>;
    update(id: number, settings: GuildMusicSettings): Promise<GuildMusicSettings | null>;
}

@Injectable()
export class GuildMusicSettingsService implements IGuildMusicSettingsService {
    constructor(
        @InjectRepository(GuildMusicSettings)
        private readonly musicSettingsRepository: Repository<GuildMusicSettings>,
        @Inject("GUILD_SERVICE")
        private readonly guildService: IGuildService,
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
