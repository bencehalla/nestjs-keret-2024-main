import { Controller, Post, Body, Render, Res, Redirect } from '@nestjs/common';
import { CreateLeaveDto } from 'src/dto/create-leave.dto';
import { Response } from 'express';

@Controller('leave')
export class LeaveController {
  @Post()
  async create(@Body() createLeaveDto: CreateLeaveDto, @Res() res: Response) {
    const { startDate, endDate } = createLeaveDto;

    if (new Date(startDate) >= new Date(endDate)) {
      return res.render('leave', {
        errors: { date: 'Kezdő dátumnak meg kell előznie a vég dátumot.' },
        data: createLeaveDto,
      });
    }


    return res.redirect('/success');
  }

  @Render('leave')
  showForm() {
    return { errors: {}, data: {} };
  }
}
