import { MongoDocument } from '@/database.module';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { EMemberStatus } from './member.dto';

export const MemberSchemaName = 'MemberDefinition';
@Schema({ collection: MemberSchemaName })
export class MemberDefinition {
  @Prop()
  iCalvinusMemberID: number;

  @Prop({ required: true })
  name: string;

  @Prop()
  email: string;

  @Prop()
  phone: string;

  @Prop()
  cellphone: string;

  @Prop({ type: EMemberStatus, enum: EMemberStatus, enumName: 'EMemberStatus' })
  status: EMemberStatus;

  @Prop()
  enabled: boolean;
}

export type MemberDocument = MemberDefinition & MongoDocument;

export const MemberSchema = SchemaFactory.createForClass(MemberDefinition);
