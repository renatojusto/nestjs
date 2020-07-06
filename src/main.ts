import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as expressHbs from 'express-handlebars';
import * as handleBarsHelpers from 'handlebars-helpers';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const hbs = expressHbs.create({
    helpers: handleBarsHelpers(),
    extname: '.hbs',
    partialsDir: [
      join(__dirname, '..', 'views')
    ]
  });

  app.engine('hbs', hbs.engine);
  app.setViewEngine('hbs');
  app.useStaticAssets(join(__dirname, '..', 'public'));

  await app.listen(3000);
}
bootstrap();

