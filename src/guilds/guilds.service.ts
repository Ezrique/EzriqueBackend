import { InjectRepository } from "@nestjs/typeorm";
import { Guild } from "./entities/guild.entity";
import { Repository } from "typeorm";

export class GuildService {
    constructor(
        @InjectRepository(Guild)
        private readonly guildRepository: Repository<Guild>,
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
