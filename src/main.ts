import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

// 端口号
const port = 8888;
// swagger路由
const swaggerPath = '/swagger';

async function bootstrap() {
  const options = new DocumentBuilder()
    .setTitle('主标题')
    .setDescription('文档介绍') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    .addTag('TestTag')
    // 接口上方加上@ApiTags('XXXX')
    .build();

  const app = await NestFactory.create(AppModule);

  // 允许跨域
  app.enableCors();

  // 创建swagger应用程序文档
  const document = SwaggerModule.createDocument(app, options);
  // setup() 依次接受Swagger的路径、应用程序实例、描述Nest应用程序的文档
  SwaggerModule.setup(swaggerPath, app, document);

  await app.listen(port);
}

bootstrap().then(() => {
  console.log(`http://localhost:${port}${swaggerPath}`);
});
