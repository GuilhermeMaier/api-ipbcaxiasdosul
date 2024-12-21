import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEnum,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';
import { MemberDefinition } from './member.schema';

export enum EMemberStatus {
  NoMember = 'Não membro',
  Commune = 'Comungante',
  NoCommune = 'Não comungante',
}

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

export class Member extends PartialType(MemberDefinition) {
  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @IsOptional()
  iCalvinusMemberID: number;

  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  email: string;

  @ApiPropertyOptional({ type: String })
  @IsNumberString()
  @IsOptional()
  phone: string;

  @ApiPropertyOptional({ type: String })
  @IsNumberString()
  @IsOptional()
  cellphone: string;

  @ApiPropertyOptional({
    type: EMemberStatus,
    enum: EMemberStatus,
    enumName: 'EMemberStatus',
  })
  @IsOptional()
  @IsString()
  @IsEnum(EMemberStatus)
  status: EMemberStatus;

  @ApiProperty({ type: Boolean })
  @IsBoolean()
  enabled: boolean;
}

export class MemberToInsert extends Member {}
