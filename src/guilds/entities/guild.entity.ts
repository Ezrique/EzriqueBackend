import { CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "guilds" })
export class Guild {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;
}
