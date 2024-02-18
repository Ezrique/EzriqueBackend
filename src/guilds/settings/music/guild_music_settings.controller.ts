import {
    Controller,
    Get,
    Inject,
    Param,
    Post,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AuthenticatedGuard } from "src/auth.guards";
import { GuildMusicSettingsService } from "./guild_music_settings.service";
import { GuildMusicSettings } from "./entities/guild_music_settings.entity";

@Controller("guilds/:id/music_settings")
export class GuildMusicSettingsController {
    constructor(private readonly settingsService: GuildMusicSettingsService) {}

    @Get()
    @UseGuards(AuthenticatedGuard)
    async get(@Res() response: Response, @Param("id") id: number) {
        const settings = await this.settingsService.get(id);
        if (!settings) {
            return response.status(404).send({
                message: "Guild not found.",
            });
        }

        return response.json(settings);
    }

    @Post()
    @UseGuards(AuthenticatedGuard)
    async update(
        @Req() req: Request,
        @Res() response: Response,
        @Param("id") id: number,
    ) {
        const settings = req.body as GuildMusicSettings;
        const updatedSettings = await this.settingsService.update(id, settings);
        if (!updatedSettings) {
            return response.status(404).send({
                message: "Guild not found.",
            });
        }

        return response.json(updatedSettings);
    }
}
