import { Controller, Get, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthenticatedGuard } from "src/auth.guards";
import { IUserTtsSettingsService } from "./user_tts_settings.service";

@Controller("users/tts_settings")
export class UserTtsSettingsController {
    constructor(
        @Inject("USER_TTS_SETTINGS_SERVICE")
        private readonly settingsService: IUserTtsSettingsService,
    ) {}

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
