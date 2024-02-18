import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserTtsSettings } from "./entities/user_tts_settings.entity";
import { PartialUser } from "src/auth/entities/user.entity";

@Injectable()
export class UserTtsSettingsService {
    constructor(
        @InjectRepository(UserTtsSettings)
        private readonly ttsSettingsRepository: Repository<UserTtsSettings>,
    ) {}

    async create(user: PartialUser): Promise<UserTtsSettings> {
        const settings = this.ttsSettingsRepository.create(user);
        return this.ttsSettingsRepository.save(settings);
    }

    async get(user: PartialUser): Promise<UserTtsSettings> {
        const settings = await this.ttsSettingsRepository.findOne({
            where: { id: user.id },
        });

        return settings || this.create(user);
    }

    async update(
        user: PartialUser,
        settings: UserTtsSettings,
    ): Promise<UserTtsSettings> {
        await this.ttsSettingsRepository.update(user.id, settings);
        return this.get(user);
    }
}
