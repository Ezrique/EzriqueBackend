import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthenticatedGuard } from "src/auth.guards";

@Controller("users")
export class UsersController {
    @Get("me")
    @UseGuards(AuthenticatedGuard)
    me(@Req() request: Request) {
        return request.user;
    }
}
