import { Controller, Get, Res } from '@nestjs/common';

import { FastifyReply } from 'fastify';

@Controller()
export class AppController {
  @Get('file')
  getFileTest(@Res() res: FastifyReply) {
    return res.sendFile('index.html');
  }
}
