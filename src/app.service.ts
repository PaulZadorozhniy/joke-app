import { Injectable } from '@nestjs/common';
import redisClient from './redis';
import { getJokeOfTheDay } from './jokes';

@Injectable()
export class AppService {
  getDouble(number: number): number {
    return 2 * number;
  }

  async getCount(): Promise<number> {
    const count: number = +(await redisClient.get('count'));

    if (!count) {
      await redisClient.set('count', 1);

      return 1;
    }

    await redisClient.set('count', count + 1);

    return count + 1;
  }

  async getJoke(): Promise<string> {
    return getJokeOfTheDay();
  }
}
