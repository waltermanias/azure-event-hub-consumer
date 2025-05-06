import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EventHubModule } from './modules/event-hub/event-hub.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), EventHubModule],
})
export class AppModule {}
