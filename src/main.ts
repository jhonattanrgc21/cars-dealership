import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // Estas properties se utilizan para ignorar los campos de entrada que no esten definidos en los DTO
    whitelist: true, 
    forbidNonWhitelisted: true
  }))
  await app.listen(3000);
}
bootstrap();
