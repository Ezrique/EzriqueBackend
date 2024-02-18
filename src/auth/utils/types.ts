import { User } from "src/users/entities/user.entity";

export type DoneFunction = (err: Error, user: User) => void;
