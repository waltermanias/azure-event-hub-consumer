/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  Logger,
} from '@nestjs/common';
import { EventHubConsumerClient } from '@azure/event-hubs';

@Injectable()
export class EventHubService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(EventHubService.name);
  private client: EventHubConsumerClient;

  private readonly connectionString = process.env.EVENT_HUB_CONNECTION_STRING;
  private readonly eventHubName = process.env.EVENT_HUB_NAME;
  private readonly consumerGroup = '$Default';

  async onModuleInit() {
    this.logger.log('Starting EventHub consumer...');

    this.client = new EventHubConsumerClient(
      this.consumerGroup,
      this.connectionString,
      this.eventHubName,
    );

    this.client.subscribe({
      processEvents: async (events, context) => {
        for (const event of events) {
          this.logger.log(`Received event: ${JSON.stringify(event.body)}`);
        }
      },
      processError: async (err, context) => {
        this.logger.error(`Error receiving events: ${err.message}`);
      },
    });
  }

  async onModuleDestroy() {
    this.logger.log('Shutting down EventHub consumer...');
    await this.client?.close();
  }
}
