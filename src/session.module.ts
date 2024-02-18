import { Module, MiddlewareConsumer, RequestMethod } from "@nestjs/common";
import { Repository } from "typeorm";
import { Session } from "./auth/entities/session.entity";
import { TypeormStore } from "connect-typeorm";
import { InjectRepository, TypeOrmModule } from "@nestjs/typeorm";
import * as passport from "passport";
import * as session from "express-session";

@Module({
    imports: [TypeOrmModule.forFeature([Session])],
})
export class SessionModule {
    constructor(
        @InjectRepository(Session)
        private readonly sessionRepository: Repository<Session>,
    ) {}

    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(
                session({
                    secret: process.env.SESSION_KEY,
                    resave: false,
                    saveUninitialized: false,
                    store: new TypeormStore().connect(this.sessionRepository),
                    cookie: {
                        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
                    },
                }),
            )
            .forRoutes({
                path: "*",
                method: RequestMethod.ALL,
            });

        consumer.apply(passport.initialize()).forRoutes({
            path: "*",
            method: RequestMethod.ALL,
        });

        consumer.apply(passport.session()).forRoutes({
            path: "*",
            method: RequestMethod.ALL,
        });
    }
}
