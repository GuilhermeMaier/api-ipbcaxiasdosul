import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MembersController as MemberController } from './member.controller';
import { MemberSchema, MemberSchemaName } from './member.schema';
import { MemberService } from './member.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MemberSchemaName, schema: MemberSchema },
    ]),
  ],
  controllers: [MemberController],
  providers: [MemberService],
})
export class MemberModule {}
