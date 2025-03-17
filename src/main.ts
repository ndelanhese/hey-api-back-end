import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { apiReference } from '@scalar/nestjs-api-reference';
import * as fs from 'fs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats api documentation')
    .setVersion('1.0')
    .addTag('cats')
    .setBasePath('api')
    .build();
  const documentFactory = SwaggerModule.createDocument(app, config, {
    ignoreGlobalPrefix: true,
    autoTagControllers: true,
  });

  fs.writeFileSync('./openapi.json', JSON.stringify(documentFactory, null, 2));
  app.use(
    '/api',
    apiReference({
      content: documentFactory,
      title: 'Hey api back-end',
      theme: 'dark',
    }),
  );
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(3000);
}
bootstrap();
