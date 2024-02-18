import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "guild_music_settings" })
export class GuildMusicSettings {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column({
        default: true,
    })
    enabled: boolean;

    @Column("bigint", {
        name: "music_queue_channel_id",
        nullable: true
    })
    musicQueueChannelId: number;

    @Column("bigint", {
        name: "dj_role",
        nullable: true,
    })
    djRole: number;

    @Column({
        name: "dj_only",
        default: false,
    })
    djOnly: boolean;
}
