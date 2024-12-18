import { Injectable } from '@nestjs/common';
import { IMember, MemberStatus } from './members.dto';
import { iCalvinusMembers } from './members.mock';

@Injectable()
export class MembersService {
  constructor() {}

  async getMembers(): Promise<IMember[]> {
    return iCalvinusMembers.map((c) => {
      return {
        id: Number(c.MembroID) || null,
        name: c.Nome || null,
        email: c.Email || null,
        phone: c.Telefone.replace(/\D/g, '') || null,
        cellphone: c.Celular.replace(/\D/g, '') || null,
        status: (c.Membro as MemberStatus) || null,
        enabled: c.Situa === 'Ativo' || null,
      };
    });
  }
}
