import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostalCodeModule } from './postal-code/postal-code.module';

@Module({
  imports: [PostalCodeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
