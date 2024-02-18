import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";

@Entity({ name: "users" })
export class User {
    @PrimaryColumn("bigint")
    id: number;

    @CreateDateColumn({
        name: "created_at",
    })
    createdAt: Date;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    avatar: string;
}
