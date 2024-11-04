import { Module } from '@nestjs/common';
import { LeaveController } from './leave.controller';
import { SuccessController } from './success.controller';

@Module({
  imports: [],
  controllers: [LeaveController, SuccessController],
  providers: [],
})
export class AppModule {}
