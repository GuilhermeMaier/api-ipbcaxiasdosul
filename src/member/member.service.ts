import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EMemberStatus, Member, MemberToInsert } from './member.dto';
import { iCalvinusMembers } from './member.mock';
import { MemberDefinition, MemberDocument } from './member.schema';

@Injectable()
export class MemberService {
  constructor(
    @InjectModel(MemberDefinition.name)
    private readonly memberModel: Model<MemberDocument>,
  ) {}

  async getMembers(): Promise<Member[]> {
    return await this.memberModel.find();
  }

  async getMembersByName({
    memberName,
  }: {
    memberName: string;
  }): Promise<Member[]> {
    return await this.memberModel.find({
      name: { $regex: memberName, $options: 'i' },
    });
  }

  async createMember({
    toInsert,
  }: {
    toInsert: MemberToInsert;
  }): Promise<Member> {
    try {
      return await this.memberModel.create(toInsert);
    } catch (error) {
      throw new Error(error);
    }
  }

  async convert() {
    const members = iCalvinusMembers.map((c): Member => {
      return {
        iCalvinusMemberID: Number(c.MembroID) || null,
        name: c.Nome || null,
        email: c.Email || null,
        phone: c.Telefone.replace(/\D/g, '') || null,
        cellphone: c.Celular.replace(/\D/g, '') || null,
        status: (c.Membro as EMemberStatus) || null,
        enabled: c.Situa === 'Ativo' || null,
      };
    });
    for (const member of members) {
      await this.createMember({ toInsert: member });
      console.log('foi');
    }
    console.log(members);
    return [...members];
  }
}
