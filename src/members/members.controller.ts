import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MembersService } from './members.service';

@ApiTags('Membros')
@Controller('/members')
export class MembersController {
  constructor(private readonly membersService: MembersService) {}

  @Get('/')
  async getMembers() {
    return await this.membersService.getMembers();
  }
}
