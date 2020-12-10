import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestModule } from './test/test.module';
import { TodoModule } from './todo/todo.module';
import { TransformController } from './transform/transform.controller';

@Module({
  imports: [TestModule, TodoModule],
  controllers: [AppController, TransformController],
  providers: [AppService],
})
export class AppModule {}
