import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { IsNumberString } from 'class-validator';

export class DoubleParams {
  @IsNumberString()
  number: number;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/double/:number')
  getDouble(@Param() params: DoubleParams): number {
    return this.appService.getDouble(+params.number);
  }

  @Get('/count')
  async getCount(): Promise<number> {
    return this.appService.getCount();
  }

  @Get('/joke')
  async getJoke(): Promise<string> {
    return this.appService.getJoke();
  }
}
