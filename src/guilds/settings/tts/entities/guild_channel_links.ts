import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "guild_channel_links" })
export class GuildChannelLinks {
    @PrimaryColumn("bigint")
    id: number;

    @PrimaryColumn("bigint", {
        name: "voice_channel_id",
    })
    voiceChannelId: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column("bigint", {
        array: true,
    })
    textChannelIds: number[];
}
