import { Controller, Get, Inject, Post, Req, UseGuards } from "@nestjs/common";
import { Request } from "express";
import { AuthenticatedGuard } from "src/auth.guards";
import { IUserMusicSettingsService } from "./user_music_settings.service";

@Controller("users/music_settings")
export class UserMusicSettingsController {
    constructor(
        @Inject("USER_MUSIC_SETTINGS_SERVICE")
        private readonly settingsService: IUserMusicSettingsService,
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
