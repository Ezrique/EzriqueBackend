import { NestFactory } from "@nestjs/core";
import { ValidationPipe } from "@nestjs/common";
import { AppModule } from "./app.module";

export const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "hex");

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const port = process.env.PORT || 3000;

    app.enableCors();
    app.useGlobalPipes(
        new ValidationPipe({
            whitelist: true,
            disableErrorMessages: false,
            validateCustomDecorators: true,
        }),
    );

    await app.listen(port);
    console.log(`Server running on http://localhost:${port}`);
}

bootstrap();
