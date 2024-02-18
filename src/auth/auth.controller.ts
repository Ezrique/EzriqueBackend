import { Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { DiscordAuthGuard } from "../auth.guards";

@Controller("auth")
export class AuthController {
    @Get("redirect")
    @UseGuards(DiscordAuthGuard)
    redirect(@Req() request: Request) {
        return {
            message: "Logged in!",
        };
    }

    @Get("login")
    @UseGuards(DiscordAuthGuard)
    login() {
        return {
            message: "Redirecting to Discord...",
        };
    }

    @Post("logout")
    logout(@Req() request: Request) {
        request.logOut({}, (err) => {
            if (err) {
                console.error(err);
            }
        });

        return {
            message: "Logged out",
        };
    }
}
