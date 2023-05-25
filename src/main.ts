import { NestFactory } from '@nestjs/core';

import { ValidationPipe } from '@nestjs/common';

import { ConfigService } from '@nestjs/config';

import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app/app.module';

import { ENDPOINTS } from './helpers/constants/constants';

const { API_DOCUMENTS } = ENDPOINTS;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('PORT');

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Multi Store API')
    .setDescription('The multi store API with companies, products, and orders.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup(API_DOCUMENTS, app, document);

  await app.listen(port, () => console.log(`Server start on port: ${port}`));
}

bootstrap();
