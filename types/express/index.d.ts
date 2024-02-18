import { Request } from "express";
import { PartialUser } from "src/auth/entities/user.entity";

declare module "express" {
    export interface Request {
        user: PartialUser;
    }
}
