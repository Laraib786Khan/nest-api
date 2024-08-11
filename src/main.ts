import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Setup Swagger documentation
  const config = new DocumentBuilder()
    .setTitle('Nest Backend API')
    .setDescription('API documentation for the Nest.js backend')
    .setVersion('1.0')
    .addBearerAuth() // Add JWT Bearer auth to Swagger
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
