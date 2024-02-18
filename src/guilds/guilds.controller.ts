import { Controller, Delete, Post, Req, Res, UseGuards } from "@nestjs/common";
import { BotAuthGuard } from "src/auth.guards";
import { GuildService } from "./guilds.service";
import { Request, Response } from "express";

@Controller("guilds")
export class GuildsController {
    constructor(private readonly guildService: GuildService) {}

    @Post()
    @UseGuards(BotAuthGuard)
    async setupGuild(@Req() request: Request, @Res() response: Response) {
        if (!request.body)
            return response.status(400).json({ error: "No body provided" });
        if (!request.body["guild_id"])
            return response.status(400).json({ error: "No guild_id provided" });

        const guildId = request.body["guild_id"];
        if (isNaN(guildId) || guildId < 0)
            return response.status(400).json({ error: "Invalid guild_id" });

        response.status(200).send(await this.guildService.create(guildId));
    }

    @Delete()
    @UseGuards(BotAuthGuard)
    async deleteGuild(@Req() request: Request, @Res() response: Response) {
        if (!request.body)
            return response.status(400).json({ error: "No body provided" });
        if (!request.body["guild_id"])
            return response.status(400).json({ error: "No guild_id provided" });

        const guildId = request.body["guild_id"];
        if (isNaN(guildId) || guildId < 0)
            return response.status(400).json({ error: "Invalid guild_id" });

        await this.guildService.delete(guildId);
        response.status(200).send();
    }
}
