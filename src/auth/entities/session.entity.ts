import { Entity, PrimaryColumn, Index, Column } from "typeorm";
import { ISession } from "connect-typeorm";

@Entity({ name: "sessions" })
export class Session implements ISession {
    @Index()
    @Column("bigint")
    expiredAt: number;

    @PrimaryColumn("varchar", {
        length: 255,
    })
    id: string;

    @Column({
        type: "text",
    })
    json: string;
}
