import { Voice } from "src/types/voice.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "guild_tts_settings" })
export class GuildTtsSettings {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn({ name: "created_at" })
    createdAt: Date;

    @UpdateDateColumn({ name: "updated_at" })
    updatedAt: Date;

    @Column()
    enabled: boolean;

    @Column("enum", {
        name: "default_voice",
        enum: Voice,
        nullable: true,
        default: null,
    })
    defaultVoice: Voice;

    @Column("bigint", {
        name: "disable_tts_role",
        nullable: true,
    })
    disableTtsRole: number;
}
