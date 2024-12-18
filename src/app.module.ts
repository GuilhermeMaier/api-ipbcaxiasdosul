import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MembersModule } from './members/members.module';

@Module({
  imports: [MembersModule],
  controllers: [AppController],
})
export class AppModule {}
