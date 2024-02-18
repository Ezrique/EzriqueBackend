import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { Repository } from "typeorm";
import { PartialUser } from "./entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async validate(partial: PartialUser): Promise<User> {
        const user = await this.userRepository.findOne({
            where: { id: partial.id },
        });

        return user ? this.update(partial) : this.create(partial);
    }

    create(partial: PartialUser): Promise<User> {
        const user = this.userRepository.create(partial);
        return this.userRepository.save(user);
    }

    async update(partial: PartialUser): Promise<User> {
        await this.userRepository.update(partial.id, partial);
        return this.find(partial.id);
    }

    find(id: number): Promise<User> {
        return this.userRepository.findOne({ where: { id } });
    }
}
