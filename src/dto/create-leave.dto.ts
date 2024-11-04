import { IsNotEmpty, IsString, IsDateString, IsBoolean, Matches, MinLength } from 'class-validator';

export class CreateLeaveDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsDateString()
  startDate: string;

  @IsNotEmpty()
  @IsDateString()
  endDate: string;

  @IsBoolean()
  paidLeave: boolean;

  @Matches(/^[A-Z]{3}-[1-9]{3}$/, { message: 'Invalid employee ID format. Use BBB-SSS.' })
  employeeId: string;

  @IsString()
  @MinLength(30)
  reason: string;
}
