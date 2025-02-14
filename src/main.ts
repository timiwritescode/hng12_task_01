import { NestFactory } from '@nestjs/core';
import type { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // app.setGlobalPrefix()
  app.enableCors({
    origin: '*',
    allowedHeaders: '*',
    methods: '*',
    credentials: true
  })
  await app.listen(process.env.PORT || 3000);

}
bootstrap();