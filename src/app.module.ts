import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PassportModule } from "@nestjs/passport";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SessionModule } from "./session.module";
import { AuthModule } from "./auth/auth.module";
import { UsersModule } from "./users/users.module";
import { GuildsModule } from "./guilds/guilds.module";

@Module({
    imports: [
        ConfigModule.forRoot(),
        TypeOrmModule.forRoot({
            type: "postgres",
            entities: [`${__dirname}/**/*/*.entity{.ts,.js}`],
            host: "127.0.0.1",
            port: 5432,
            username: "ezrique-api",
            password: process.env.DATABASE_PASSWORD.trim(),
            database: "ezrique",
            synchronize: true,
        }),
        SessionModule,
        PassportModule.register({ session: true }),

        AuthModule,
        UsersModule,
        GuildsModule,
    ],
})
export class AppModule {}
