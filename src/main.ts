import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import dayjs from 'dayjs';
import { json } from 'express';
import helmet from 'helmet';
import * as requestIp from 'request-ip';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(requestIp.mw());
  app.enableCors();
  app.use(helmet());
  app.use(json({ limit: '50mb' }));
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  const config = new DocumentBuilder()
    .setTitle('Your API')
    .setDescription('API description')
    .setVersion(dayjs().format('HH:mm:ss DD-MM-YYYY'))
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
