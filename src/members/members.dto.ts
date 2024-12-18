export interface ICalvinusMember {
  MembroID: string;
  Nome: string;
  Telefone: string;
  Celular: string;
  Email: string;
  Membro: string;
  Oficial: string;
  Diferenca: number;
  IgrejaNome: string;
  Situa: string;
  MeioDemissao: string;
}

export type MemberStatus = 'Não membro' | 'Comungante' | 'Não comungante';

export interface IMember {
  id: number;
  name: string;
  email: string;
  phone: string;
  cellphone: string;
  status: MemberStatus;
  enabled: boolean;
}
