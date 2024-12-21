import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://teste:1GMOG9e58eKSVP3V@cluster0.v2j8r.mongodb.net/',
    ),
  ],
})
export class DatabaseModule {}

export class MongoDocument extends Document {}
