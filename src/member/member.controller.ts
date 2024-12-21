import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MemberToInsert } from './member.dto';
import { MemberService } from './member.service';

@ApiTags('Membros')
@Controller('/members')
export class MembersController {
  constructor(private readonly membersService: MemberService) {}

  @Get('/')
  async getMembers() {
    return await this.membersService.getMembers();
  }

  @Get('/by-name/:memberName')
  async getMembersByName(@Param('memberName') memberName: string) {
    return await this.membersService.getMembersByName({ memberName });
  }

  @Post('/')
  async createMember(@Body() toInsert: MemberToInsert) {
    return await this.membersService.createMember({ toInsert });
  }
}
