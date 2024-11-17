import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  public getHello(): string {
    throw new Error('Hello world');
  }
  public getDetail(): string {
    return ('Here are Zoo details');
  }

}
