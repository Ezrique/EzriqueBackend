import { Controller, Get, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthenticatedGuard } from "src/auth.guards";
import { UserTtsSettingsService } from "./user_tts_settings.service";

@Controller("users/tts_settings")
export class UserTtsSettingsController {
    constructor(private readonly settingsService: UserTtsSettingsService) {}

    @Get()
    @UseGuards(AuthenticatedGuard)
    async get(@Req() req: Request) {
        return await this.settingsService.get(req.user);
    }

    @Post()
    @UseGuards(AuthenticatedGuard)
    async update(@Req() req: Request) {
        return await this.settingsService.update(req.user, req.body);
    }
}
