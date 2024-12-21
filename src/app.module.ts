import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { AppController } from './app.controller';
import { MemberModule } from './member/member.module';

export class MongoDocument extends Document {}

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://teste:1GMOG9e58eKSVP3V@cluster0.v2j8r.mongodb.net/',
    ),
    MemberModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
