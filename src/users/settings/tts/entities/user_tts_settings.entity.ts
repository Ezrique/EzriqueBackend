import { Voice } from "src/types/voice.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "user_tts_settings" })
export class UserTtsSettings {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        default: true,
    })
    enabled: boolean;

    @Column("enum", {
        enum: Voice,
        default: Voice.DEFAULT,
    })
    voice: Voice;

    @Column({
        default: true,
    })
    bypassEnabled: boolean;

    @Column({
        default: ";",
    })
    bypassPrefix: string;

    @Column({
        default: false,
    })
    readUsernameEnabled: boolean;

    @Column({
        default: "!",
    })
    readUsernamePrefix: string;

    @Column({
        default: false,
    })
    readUsernameByDefault: boolean;

    @Column({
        default: true,
    })
    allowVoiceChannelText: boolean;
}
