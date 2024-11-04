import { Controller, Get, Render } from '@nestjs/common';

@Controller('success')
export class SuccessController {
  @Render('success')
  getSuccess() {
    return { message: 'Sikeres igénylés!' };
  }
}
