import {
    Controller,
    Get,
    Param,
    Post,
    Req,
    Res,
    UseGuards,
} from "@nestjs/common";
import { Request, Response } from "express";
import { AuthenticatedGuard } from "src/auth.guards";
import { GuildTtsSettingsService } from "./guild_tts_settings.service";
import { GuildTtsSettings } from "./entities/guild_tts_settings.entity";

@Controller("guilds/:id/tts_settings")
export class GuildTtsSettingsController {
    constructor(private readonly settingsService: GuildTtsSettingsService) {}

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
        const settings = req.body as GuildTtsSettings;
        const updatedSettings = await this.settingsService.update(id, settings);
        if (!updatedSettings) {
            return response.status(404).send({
                message: "Guild not found.",
            });
        }

        return response.json(updatedSettings);
    }
}
