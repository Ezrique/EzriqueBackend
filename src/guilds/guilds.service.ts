import { InjectRepository } from "@nestjs/typeorm";
import { Guild } from "./entities/guild.entity";
import { Repository } from "typeorm";

export interface IGuildService {
    create(id: number): Promise<Guild>;
    delete(id: number): Promise<void>;
    find(id: number): Promise<Guild>;
    has(id: number): Promise<boolean>;
}

export class GuildService implements IGuildService {
    constructor(
        @InjectRepository(Guild)
        private readonly guildRepository: Repository<Guild>
    ) {}

    async create(id: number): Promise<Guild> {
        const guild = this.guildRepository.create({ id });
        return this.guildRepository.save(guild);
    }

    async delete(id: number): Promise<void> {
        await this.guildRepository.delete(id);
    }

    async find(id: number): Promise<Guild> {
        return this.guildRepository.findOne({ where: { id } });
    }

    async has(id: number): Promise<boolean> {
        const guild = await this.find(id);
        return !!guild;
    }
}
