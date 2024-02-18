import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { GuildTtsSettings } from "./entities/guild_tts_settings.entity";
import { IGuildService } from "src/guilds/guilds.service";

export interface IGuildTtsSettingsService {
    create(id: number): Promise<GuildTtsSettings>;
    get(id: number): Promise<GuildTtsSettings | null>;
    update(id: number, settings: GuildTtsSettings): Promise<GuildTtsSettings | null>;
}

@Injectable()
export class GuildTtsSettingsService implements IGuildTtsSettingsService {
    constructor(
        @InjectRepository(GuildTtsSettings)
        private readonly ttsSettingsRepository: Repository<GuildTtsSettings>,
        @Inject("GUILD_SERVICE")
        private readonly guildService: IGuildService,
    ) {}

    async create(id: number): Promise<GuildTtsSettings> {
        const settings = this.ttsSettingsRepository.create({ id });
        return this.ttsSettingsRepository.save(settings);
    }

    async get(id: number): Promise<GuildTtsSettings> {
        const settings = await this.ttsSettingsRepository.findOne({
            where: { id },
        });

        if (!settings && (await this.guildService.has(id)))
            return this.create(id);
        return settings;
    }

    async update(
        id: number,
        settings: GuildTtsSettings,
    ): Promise<GuildTtsSettings> {
        await this.ttsSettingsRepository.update(id, settings);
        return this.get(id);
    }
}
