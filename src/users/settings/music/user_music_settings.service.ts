import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { UserMusicSettings } from "./entities/user_music_settings.entity";
import { PartialUser } from "src/auth/entities/user.entity";

export interface IUserMusicSettingsService {
    create(user: PartialUser): Promise<UserMusicSettings>;
    get(user: PartialUser): Promise<UserMusicSettings>;
    update(
        user: PartialUser,
        settings: UserMusicSettings,
    ): Promise<UserMusicSettings>;
}

@Injectable()
export class UserMusicSettingsService implements IUserMusicSettingsService {
    constructor(
        @InjectRepository(UserMusicSettings)
        private readonly musicSettingsRepository: Repository<UserMusicSettings>,
    ) {}

    async create(user: PartialUser): Promise<UserMusicSettings> {
        const settings = this.musicSettingsRepository.create({ id: user.id });
        return this.musicSettingsRepository.save(settings);
    }

    async get(user: PartialUser): Promise<UserMusicSettings> {
        const settings = await this.musicSettingsRepository.findOne({
            where: { id: user.id },
        });

        return settings || this.create(user);
    }

    async update(
        user: PartialUser,
        settings: UserMusicSettings,
    ): Promise<UserMusicSettings> {
        await this.musicSettingsRepository.update(user.id, settings);
        return this.get(user);
    }
}
