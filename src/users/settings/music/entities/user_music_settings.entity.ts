import {
    MusicSearchMode,
    getBitsForSearchModes,
} from "src/types/music_search_mode.entity";
import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity({ name: "user_music_settings" })
export class UserMusicSettings {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        default: true,
    })
    messageVisibility: boolean;

    @Column({
        default: true,
    })
    showQueueWhenModifying: boolean;

    @Column("bigint", {
        default: getBitsForSearchModes(MusicSearchMode.YOUTUBE),
    })
    searchMode: number;
}
